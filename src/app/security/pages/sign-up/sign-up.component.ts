import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  signUpForm: FormGroup;
  constructor(public builder: FormBuilder,
              public authService: AuthService,
              public router: Router) {
    this.signUpForm = this.builder.group({
      nickname: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  get nickname() { return this.signUpForm.controls['nickname'];}

  get email() { return this.signUpForm.controls['email'];}

  get password() { return this.signUpForm.controls['password'];}

  signUp() {
    this.authService.signUp(this.signUpForm.value).subscribe((response: any) => {
      this.authService.setToken(JSON.stringify(response.accessToken));
      this.authService.setCurrentUser(JSON.stringify(response.user));
      this.signUpForm.reset();
      console.log(`accessToken: ${this.authService.getToken()}`);
      this.router.navigate(['home']).then();
    })
  }

  cancelSignUp() {
    console.log('Cancelled');
    this.router.navigate(['home']).then();
  }

}
