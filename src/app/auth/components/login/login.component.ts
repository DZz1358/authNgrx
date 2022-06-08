import { UserInterface } from './../../interfaces/user.interface';
import { AuthService } from './../../services/auth.service';
import { loginAction } from './../../store/actions/auth.action';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
// import { isSubmittingSelector } from '../../store/selectors/auth.selector';
import { LoginRequestInterface } from '../../interfaces/loginRequset.interface';

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
    private store: Store,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.fromInit()
  }

  // valueInit(): void {
  //   this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
  // }

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
      // user: this.form.value
    }
    this.store.dispatch(loginAction({ request }))
    // this.authService.login(this.form.value).subscribe((user) => {
    //   console.log(user);
    // })
  }
}
