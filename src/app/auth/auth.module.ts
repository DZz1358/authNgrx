import { PersistanceService } from './services/persistance.service';
import { AuthGuard } from './services/auth.guard';
import { AfterLoginComponent } from './components/afterLogin/afterLogin.component';
import { AuthService } from './services/auth.service';
import { StoreModule } from '@ngrx/store';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { reducer } from './store/reducers/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffect } from './store/effects/auth.effect';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'afterLogin',
    component: AfterLoginComponent,
    canActivate: [AuthGuard]
  }
]

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('auth', reducer, {}),
    EffectsModule.forFeature([AuthEffect]),
  ],
  declarations: [
    LoginComponent,
    AfterLoginComponent
  ],
  providers: [
    AuthService,
    AuthGuard,
    PersistanceService
  ]
})
export class AuthModule { }
