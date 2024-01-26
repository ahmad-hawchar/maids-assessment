import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { updateSearch } from '../actions/user.actions';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private store: Store) { }
  onSearchChange(searchValue: string): void {
    this.store.dispatch(updateSearch({ search: searchValue }));
  }
}
