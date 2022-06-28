import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectUserToken } from '../../store/selectors/auth.selector';
import { Router } from '@angular/router';

@Component({
  selector: 'app-afterLogin',
  templateUrl: './afterLogin.component.html',
  styleUrls: ['./afterLogin.component.scss']
})
export class AfterLoginComponent implements OnInit {

  token = this.store.pipe(select(selectUserToken))


  constructor(
    private store: Store,
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.authService.getUnits().subscribe(data => {
      console.log(data);
    });
    // console.log(this.token);
    this.store.pipe(select(selectUserToken)).subscribe(token =>{
      console.log(token);
    })
  }


}
