import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './account-routing-module';
import { Login } from '../auth/login/login';
import { Register } from '../auth/register/register';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AccountRoutingModule,
    Login,
    Register
  ]
})
export class AccountModule {}
