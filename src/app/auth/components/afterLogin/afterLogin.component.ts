import { AuthService } from './../../services/auth.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-afterLogin',
  templateUrl: './afterLogin.component.html',
  styleUrls: ['./afterLogin.component.scss']
})
export class AfterLoginComponent implements OnInit {

  public displayedColumns: string[] = ['id', 'name', 'description'];
  public dataSource = new MatTableDataSource();
  @ViewChild('paginator') paginator!: MatPaginator;

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.getDepartments()
  }

  getDepartments() {
    this.authService.getUnits().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    })
  }

}
