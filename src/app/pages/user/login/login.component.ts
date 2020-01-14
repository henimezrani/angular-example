import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(private loginFormBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.loginForm = this.loginFormBuilder.group({
      left: false,
      middle: false,
      right: true,
    });
  }

}
