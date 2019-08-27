import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {RouterModule} from '@angular/router';
import { PlansPricingComponent } from './plans-pricing/plans-pricing.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [IndexComponent, LoginComponent, RegisterComponent, PlansPricingComponent, AboutComponent, HeaderComponent],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class CoreModule { }
