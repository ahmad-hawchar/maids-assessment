import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { updateSearch } from '../state/user.actions';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private store: Store) { }
  //this function is called whenever the value of the input is changed,
  //it is called inside header.component.html on the input and it passes the value of that input by using a reference
  //to that input and passing its value as a parameter to the onSearchChange function
  onSearchChange(searchValue: string): void {
    this.store.dispatch(updateSearch({ searchContent: searchValue }))
  }
}
