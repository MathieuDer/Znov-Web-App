import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;

    /**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        private _fuseConfigService: FuseConfigService,
        private _formBuilder: FormBuilder,
        private snackBar: MatSnackBar,
        private authService: AuthService,
        private router: Router
    ) {
        // Configure the layout
        this._fuseConfigService.config = {
            layout: {
                navbar: {
                    hidden: true
                },
                toolbar: {
                    hidden: true
                },
                footer: {
                    hidden: true
                },
                sidepanel: {
                    hidden: true
                }
            }
        };
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        this.loginForm = this._formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });
    }

    // Method appeler au moment de valider le formulaire
    // tslint:disable-next-line:typedef
    onLoginSubmit() {
        // Objet user
        const user = {
            email_ecole: this.loginForm.get('email').value,
            password: this.loginForm.get('password').value,
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
                this.router.navigate(['/auth']);
            });

    }
}
