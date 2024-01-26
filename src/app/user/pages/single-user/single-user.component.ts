import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { userService } from '../../services/user.service';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrl: './single-user.component.css'
})
export class SingleUserComponent {
  userData!: User | any;
  msg: string = "";
  loaded: boolean = false;
  progress: number = 0;
  constructor(private userService: userService, private route: ActivatedRoute) {
    //subscribes to the parameters that are available on the route.
    //it takes the id from the route and then it calls the fetchOne function
    //and passes the id in the parameters of the fetchOne function
    this.route.params.subscribe(params => {
      this.fetchOne(params['id']);
    })
  }
  fetchOne(id: number) {
    //calls the fetchOneUser service with the id of the used passed in the parameters
    //it subscribes to the observable returned by the service and then it puts it in the userData variable
    this.loaded = false;
    const interval = setInterval(() => {
      this.progress++;
      if (this.progress >= 95) {
        clearInterval(interval);
      }
    }, 100);
    this.userService.fetchOneUser(id).subscribe({
      next: (res: any) => {
        this.progress = 100
        setTimeout(() => { this.loaded = true; }, 700);
        this.userData = res.data;
      },
      error: (err) => {
        this.msg = "error";
        this.progress = 100
        setTimeout(() => { this.loaded = true; }, 700)
      }
    })
  }
}
