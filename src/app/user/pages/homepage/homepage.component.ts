import { Component } from '@angular/core';
import { userService } from '../../services/user.service';
import { User } from '../../interfaces/user';
import { selectSearchText } from '../../state/user.selectors';
import { Store } from '@ngrx/store';
import { loadSearchContent } from '../../state/user.actions';
import { AppState } from '../../state/app-state';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  users: User[] = [];
  usersTemp!: User[];
  searchText$: Observable<string>;
  pages: { number: number, selected: boolean }[] = [];
  constructor(private userService: userService, private store: Store<AppState>) {
    this.searchText$ = this.store.select(selectSearchText);
  }
  onSearchChange(searchTerm: string) {
    this.usersTemp = this.users.filter(user =>
      user.first_name.indexOf(searchTerm) != -1 || user.last_name.indexOf(searchTerm) != -1 || user.id.toString().indexOf(searchTerm) != -1 || user.email.indexOf(searchTerm) != -1
    )
  }
  search(page: number) {
    //this is called when the component is initialised. it fetches the user data and puts them in the users variable
    //it is also called when the user presses on another page number at the bottom of the page with the page number
    //provided as parameter to the service to fetch other groups of users
    this.userService.fetchUsers(page).subscribe({
      next: (res: any) => {
        this.pages = [];
        this.users = res.data;
        this.usersTemp = res.data
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
    this.store.subscribe({
      next: (e: any) => {
        this.onSearchChange(e.search.searchText)
      }, error: (e) => {
        console.log(e);
      }
    });
  }
}