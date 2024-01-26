import { Component } from '@angular/core';
import { userService } from '../../services/user.service';
import { User } from '../../interfaces/user';
import { selectSearchText } from '../../state/user.selectors';
import { Store } from '@ngrx/store';
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
  loaded: boolean = false;
  progress: number = 0;
  searchText$: Observable<string>;
  pages: { number: number, selected: boolean }[] = [];
  constructor(private userService: userService, private store: Store<AppState>) {
    this.searchText$ = this.store.select(selectSearchText);
  }
  onSearchChange(searchTerm: string) {
    //this function filters the users according to the given parameter
    //the new filtered array is put into userTemp which causes a rerender of the component 
    this.usersTemp = this.users.filter(user =>
      user.first_name.indexOf(searchTerm) != -1 || user.last_name.indexOf(searchTerm) != -1 || user.id.toString().indexOf(searchTerm) != -1 || user.email.indexOf(searchTerm) != -1
    )
  }
  search(page: number) {
    //this is called when the component is initialised. it fetches the user data and puts them in the users variable
    //it is also called when the user presses on another page number at the bottom of the page with the page number
    //provided as parameter to the service to fetch other groups of users
    this.loaded = false;
    const interval = setInterval(() => {
      this.progress++;
      if (this.progress >= 95) {
        clearInterval(interval);
      }
    }, 100);
    this.userService.fetchUsers(page).subscribe({
      next: (res: any) => {
        this.pages = [];
        this.users = res.data;
        this.usersTemp = res.data
        this.progress = 100
        setTimeout(() => { this.loaded = true; }, 700)
        for (let i = 1; i <= res.total_pages; i++) {
          this.pages.push({ number: i, selected: false })
        }
      },
      error: (err) => {
        this.progress = 100
        setTimeout(() => { this.loaded = true; }, 700)
        console.log(err);
      }
    })
  }
  ngOnInit(): void {
    this.search(1);
    //this is a subsciption to the state, when the state changes the onSearchChange function is called 
    //with the search input provided as parameter
    this.store.subscribe({
      next: (e: any) => {
        this.onSearchChange(e.search.searchText)
      }, error: (e) => {
        console.log(e);
      }
    });
  }
}