import { Component } from '@angular/core';
import { userService } from '../../services/user.service';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  constructor(private userService: userService) { }
  users!: User[];
  pages: { number: number, selected: boolean }[] = [];
  search(page: number) {
    //this is called when the component is initialised. it fetches the user data and puts them in the users variable
    //it is also called when the user presses on another page number at the bottom of the page with the page number
    //provided as parameter to the service to fetch other groups of users
    this.userService.fetchUsers(page).subscribe({
      next: (res: any) => {
        this.pages = [];
        this.users = res.data;
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
    this.search(1)
  }
}
