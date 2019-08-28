import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IndexComponent} from './index/index.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {RouterModule} from '@angular/router';
import {PlansPricingComponent} from './plans-pricing/plans-pricing.component';
import {AboutComponent} from './about/about.component';
import {HeaderComponent} from './header/header.component';
import {SharedModule} from '@shared/shared.module';
import {HttpClientModule} from '@angular/common/http';
import {JwtHelperService, JwtModule} from '@auth0/angular-jwt';


// Token getter for JWT module
export function tokenGetter() {
    return localStorage.getItem('token');
}

@NgModule({
    declarations: [IndexComponent, LoginComponent, RegisterComponent, PlansPricingComponent, AboutComponent, HeaderComponent],
    imports: [
        CommonModule,
        RouterModule,
        SharedModule,
        HttpClientModule,
        JwtModule.forRoot({
            config: {
                tokenGetter: tokenGetter,
                whitelistedDomains: ['localhost:3000'],
                blacklistedRoutes: ['localhost:3000/auth/']
            }
        }),
    ],
    providers: [
        JwtHelperService
    ]
})
export class CoreModule {
}
