import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

import { fuseAnimations } from '@fuse/animations';

@Component({
    selector     : 'profile',
    templateUrl  : './profile.component.html',
    styleUrls    : ['./profile.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class ProfileComponent implements OnInit {
  user: Object;


  constructor(private userService: UserService, private router: Router) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.userService.getProfile().subscribe(profile => {
      this.user = (<any>profile).user;
    },
      err => {
        console.log(err);
        return false;
      }
    );
  }

}

