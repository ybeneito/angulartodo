import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signinForm!: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
  ) { }

  ngOnInit() {
    this.initSigninForm();
  }

  initSigninForm(): void {
    this.signinForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmitSigninForm(){
    const email = this.signinForm.get('email')!.value;
    const password = this.signinForm.get('password')!.value;
    this.loginService.signUpUser(email, password)
    .then(() => {
      console.log('ok');
      }
    )
    .catch((error) => {
      console.log(error);
    })
    ;
 }

}

