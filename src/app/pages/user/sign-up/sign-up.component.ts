import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  private signUpForm;
  private result = {
    type: 'error',
    message: 'lorem',
    display: false
  };

  constructor(public formBuilder: FormBuilder) {
    this.signUpForm = this.formBuilder.group({
      email: '',
      password: ''
    });
  }

  ngOnInit() {
  }

  handleLogin(val) {
    this.result = {
      type: 'success',
      message: 'lorem',
      display: true
    };
    console.log(2, val);
  }

}
