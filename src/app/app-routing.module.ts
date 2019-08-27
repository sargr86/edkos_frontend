import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {IndexComponent} from './core/index/index.component';
import {LoginComponent} from './core/login/login.component';
import {RegisterComponent} from './core/register/register.component';

const routes: Routes = [
    {
        path: '',
        component: IndexComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
