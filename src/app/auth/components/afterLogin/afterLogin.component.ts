import { AuthService } from './../../services/auth.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectUserToken } from '../../store/selectors/auth.selector';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-afterLogin',
  templateUrl: './afterLogin.component.html',
  styleUrls: ['./afterLogin.component.scss']
})
export class AfterLoginComponent implements OnInit {

  public displayedColumns: string[] = ['id', 'name', 'description'];
  public dataSource = new MatTableDataSource();
  @ViewChild('paginator') paginator!: MatPaginator;

  token = this.store.pipe(select(selectUserToken))


  constructor(
    private store: Store,
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getDepartments()
    // console.log(this.token);
    // this.store.pipe(select(selectUserToken)).subscribe(token => {
    //   console.log(token);
    // })
  }

  getDepartments() {
    this.authService.getUnits().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    })
    // this.authService.getUnits().subscribe(data => {
    //   console.log(data);
    // });
  }


}
