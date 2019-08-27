import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [IndexComponent, LoginComponent, RegisterComponent],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class CoreModule { }
