import { Component, OnInit } from '@angular/core';
import { ProfilService } from '../../services/profil/profil.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
  user: Object;


  constructor(private profilService: ProfilService, private router: Router) { }

  ngOnInit() {
    this.profilService.getProfile().subscribe(profile => {
      this.user = (<any>profile).user;
    },
      err => {
        console.log(err);
        return false;
      }
    );
  }

}
