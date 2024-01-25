import { Component } from '@angular/core';
import { userService } from '../../services/user.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  constructor(private userService: userService) {
  }
  ngOnInit(): void {
    console.log(this.userService.fetchUsers(1).subscribe({
      next: (res) => {
        console.log(res)
      },
      error: (err) => {
        console.log(err)
      }
    }))
  }
}
