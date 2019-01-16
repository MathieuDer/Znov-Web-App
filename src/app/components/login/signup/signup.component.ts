import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder,  Validators, FormGroup } from '@angular/forms';
import { ValidateService } from '../../../services/validate/validate.service';
import { AuthService } from '../../../services/auth/auth.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  // Ne fonctionne pas avec les reactive form
  /*
  prenom: String;
  nom: String;
  email_perso: String;
  email_ecole: String;
  password: String;
  telephone: String;
  adresse: String;
  date_naissance: String;
  ville_naissance: String;
  */

  SignUpForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private validateService: ValidateService,
    private snackBar: MatSnackBar,
    private authService: AuthService,
    private router: Router
      ) {
    this.createForm();
  }

  // Method pour utiliser le FormBuilder -> https://angular.io/guide/reactive-forms#generating-form-controls-with-formbuilder
   createForm() {
    this.SignUpForm = this.fb.group({
      prenom: ['', Validators.required ],
      nom: ['', Validators.required ],
      email_perso: ['', Validators.required ],
      email_ecole: ['', Validators.required ],
      password: ['', Validators.required ],
      telephone: ['', Validators.required ],
      adresse: ['', Validators.required ],
      date_naissance: ['', Validators.required ],
      ville_naissance: ['', Validators.required ]

    });
  }

  ngOnInit() {
  }


  // Method appeler au moment de valider le formulaire
  onRegisterSubmit() {
    // Objet user
    const user = {
      prenom: this.SignUpForm.get('prenom').value,
      nom: this.SignUpForm.get('nom').value,
      email_perso: this.SignUpForm.get('email_perso').value,
      email_ecole: this.SignUpForm.get('email_ecole').value,
      password: this.SignUpForm.get('password').value,
      telephone: this.SignUpForm.get('telephone').value,
      adresse: this.SignUpForm.get('adresse').value,
      date_naissance: this.SignUpForm.get('date_naissance').value,
      ville_naissance: this.SignUpForm.get('ville_naissance').value
    };


    // Gestion d'erreur avec Snack Bar Angular Material
    // Champs requis
    if (!this.validateService.validateRegister(user)) {
      this.snackBar.open('Veuillez remplir tous les champs', 'Fermer', {
        duration: 3500,
      });
      return false;
    }

    // Email perso requis
    if (!this.validateService.validateEmail(user.email_perso)) {
      this.snackBar.open('L\'email perso n\'est pas valide', 'Fermer', {
        duration: 3500,
      });
      return false;
    }

    // Email ecole requis
    if (!this.validateService.validateEmail(user.email_ecole)) {
      this.snackBar.open('L\'email ecole n\'est pas valide', 'Fermer', {
        duration: 3500,
      });
      return false;
    }


    // Inscription utilisateur
    this.authService.registerUser(user).subscribe(
      data => {
        this.snackBar.open('Bravo vous êtes inscrit', 'Fermer', {
          duration: 3500,
        });
        this.router.navigate(['/login/signin']);
      },
      error => {
        this.snackBar.open('Aie ça ne fonctionne pas', 'Fermer', {
          duration: 3500,
        });
        this.router.navigate(['/login/signup']);
      }

    );
  }

}
