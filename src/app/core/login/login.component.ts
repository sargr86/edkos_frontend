import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthService} from '@core/services/auth.service';
import {Router} from '@angular/router';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;

    constructor(
        private fb: FormBuilder,
        public auth: AuthService,
        public router: Router
    ) {
        this.loginForm = this.fb.group({
            email: [''],
            password: ['']
        });
    }

    ngOnInit() {
    }

    logIn() {
        this.auth.login(this.loginForm.value).subscribe(dt => {

            // Saving token to browser local storage
            localStorage.setItem('token', (dt.hasOwnProperty('token') ? dt.token : ''));

            // Navigate to the dashboard page
            this.router.navigate(['/']);
        });
    }

}
