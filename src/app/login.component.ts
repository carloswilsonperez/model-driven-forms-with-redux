import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidator } from './passwordValidator';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html'
})
export class LoginComponent {
    form: FormGroup;

    // Because we have more than one validator on password form
    // control, we need to compose the multiple validators by
    // calling Validators compose method.

    constructor(
        fb: FormBuilder,
        private _loginService: LoginService,
        private _router: Router
    ) {
        this.form = fb.group({
            username: ['', Validators.required],
            password: ['', Validators.compose([Validators.required, PasswordValidator.cannotContainSpace])]
        });
    }

    login() {
        console.log(this.form.value); // prints form values in json format
        const result = this._loginService.login(this.form.controls['username'].value, this.form.controls['password'].value);

        if (!result) {
            this.form.controls['password'].setErrors({
                invalidLogin: true
            });
        } else {
            this._router.navigate(['github']);
        }
    }
}

