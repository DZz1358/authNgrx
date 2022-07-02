import { loginAction } from './../../store/actions/auth.action';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form!: FormGroup
  isSubmitting$: Observable<boolean> | undefined

  constructor(
    private fb: FormBuilder,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.fromInit()
  }

  fromInit() {
    this.form = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required,],
    })
  }

  onSubmit() {    
    const request = {
      login: this.form.value.login,
      password: this.form.value.password
    }
    this.store.dispatch(loginAction({ request }))
  }
}
