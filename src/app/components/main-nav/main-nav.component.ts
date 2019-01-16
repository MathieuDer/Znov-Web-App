import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../../services/auth/auth.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';


@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
})
export class MainNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private snackBar: MatSnackBar,
    private authService: AuthService,
    private router: Router
  ) {}

  onLogoutClick() {
    this.authService.logout();
    this.snackBar.open('Vous n\'êtes plus connectés', 'Fermer', {
      duration: 3500,
    });
    this.router.navigate(['/login/signin']);
    return false;
  }
}
