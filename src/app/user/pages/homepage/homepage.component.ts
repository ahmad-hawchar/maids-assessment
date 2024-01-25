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
  ngOnInit(): void {
    console.log(this.userService.fetchUsers(1).subscribe({
      next: (res: any) => {
        this.users = res.data;
        console.log(this.users)
      },
      error: (err) => {
        console.log(err)
      }
    }))
  }
}
