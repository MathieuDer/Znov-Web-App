import {Component} from '@angular/core';
import {FormControl, FormBuilder,  Validators, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  SignInForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }
   createForm() {
    this.SignInForm = this.fb.group({
       email: ['', Validators.required ],
       password: ['', Validators.required ]
    });
  }

  ngOnInit() {
  }


}
