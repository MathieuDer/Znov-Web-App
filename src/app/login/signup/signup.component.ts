import { Component, OnInit } from '@angular/core';
import {FormControl, FormBuilder,  Validators, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  SignUpForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }
   createForm() {
    this.SignUpForm = this.fb.group({
       name: ['', Validators.required ],
       firstname: ['', Validators.required ],
       email: ['', Validators.required ],
       password: ['', Validators.required ],
       passwordConfirmation: ['', Validators.required ]
    });
  }

  ngOnInit() {
  }

}
