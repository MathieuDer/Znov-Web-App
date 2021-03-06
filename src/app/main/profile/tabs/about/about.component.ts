import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../user.service';
import { Router } from '@angular/router';


import { fuseAnimations } from '@fuse/animations';
import { ProfileService } from 'app/main/profile/profile.service';

@Component({
    selector     : 'profile-about',
    templateUrl  : './about.component.html',
    styleUrls    : ['./about.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class ProfileAboutComponent implements OnInit, OnDestroy
{
    about: any;
    form: FormGroup;
    user: Object;


    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {ProfileService} _profileService
     */
    constructor(
        private _profileService: ProfileService,
        private _formBuilder: FormBuilder,
        private userService: UserService,
         private router: Router
    )
    {
        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        this._profileService.aboutOnChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(about => {
                this.about = about;
            });

            this.form = this._formBuilder.group({
                firstName: ['', [Validators.required]],
                lastName: ['', Validators.required],
                birthdate: ['', Validators.required],
                birthplace: ['', Validators.required],
                address: ['', Validators.required],
            });

            this.userService.getProfile().subscribe(profile => {
                this.user = (<any>profile).user;
              },
                err => {
                  console.log(err);
                  return false;
                }
              );
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
}
