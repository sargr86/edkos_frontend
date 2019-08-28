import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_URL} from '@shared/constants/settings';
import {User} from '@shared/models/User';
import {JwtHelperService} from '@auth0/angular-jwt';
import * as jwtDecode from 'jwt-decode';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    userData;

    constructor(
        private httpClient: HttpClient,
        private jwtHelper: JwtHelperService) {
        // Receiving user data from here!!!!
        if (this.loggedIn()) {
            const token = localStorage.getItem('token');
            this.userData = jwtDecode(token);
        }
    }

    login(formData) {
        return this.httpClient.post<User>(`${API_URL}auth/login`, formData);
    }

    loggedIn() {
        return !this.jwtHelper.isTokenExpired();
    }
}
