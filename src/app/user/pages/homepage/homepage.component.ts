import { Component } from '@angular/core';
import { userService } from '../../services/user.service';
import { User } from '../../interfaces/user';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { selectSearch } from '../../actions/user.selectors';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  users!: User[];
  usersTemp!: User[];
  searchValue: Observable<string>;
  pages: { number: number, selected: boolean }[] = [];
  constructor(private userService: userService, private store: Store) {
    this.searchValue = store.pipe(select(selectSearch));
  }
  search(page: number) {
    //this is called when the component is initialised. it fetches the user data and puts them in the users variable
    //it is also called when the user presses on another page number at the bottom of the page with the page number
    //provided as parameter to the service to fetch other groups of users
    this.userService.fetchUsers(page).subscribe({
      next: (res: any) => {
        this.pages = [];
        this.users, this.usersTemp = res.data;
        for (let i = 1; i <= res.total_pages; i++) {
          this.pages.push({ number: i, selected: false })
        }
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
  ngOnInit(): void {
    this.search(1);
    this.searchValue.subscribe(searchTerm => {
      this.onSearchChange(searchTerm);
    });
  }
  onSearchChange(searchTerm: string) {
    this.usersTemp = this.users.filter((user) => {
      return user.first_name.indexOf(searchTerm) || user.last_name.indexOf(searchTerm) || user.id.toString().indexOf(searchTerm) || user.email.indexOf(searchTerm)
    })
  }
}
