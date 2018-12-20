import { Component, OnInit } from '@angular/core';
import {FormControl, FormBuilder,  Validators, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {
  ForgotForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }
   createForm() {
    this.ForgotForm = this.fb.group({
       email: ['', Validators.required ]
    });
  }

  ngOnInit() {
  }

}
