import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  // Ne fonctionne pas avec les reactive form

  /*
  email_ecole: String;
  password: String;
  */

  SignInForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private authService: AuthService,
    private router: Router
  ) {
    this.createForm();
  }

  // Method pour utiliser le FormBuilder -> https://angular.io/guide/reactive-forms#generating-form-controls-with-formbuilder
  createForm() {
    this.SignInForm = this.fb.group({
      email_ecole: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  // Method appeler au moment de valider le formulaire
  onLoginSubmit() {
    // Objet user
    const user = {
      email_ecole: this.SignInForm.get('email_ecole').value,
      password: this.SignInForm.get('password').value,
    };

    this.authService.authenticateUser(user).subscribe(
      data => {
        this.authService.storeUserData(data['token'], data['user']);

        this.snackBar.open('Bravo vous êtes connectée', 'Fermer', {
          duration: 3500,
        });
        this.router.navigate(['/dashboard']);
      },
      error => {
        this.snackBar.open('Aie ça ne fonctionne pas', 'Fermer', {
          duration: 3500,
        });
        this.router.navigate(['/login/signin']);
      });

  }
}
