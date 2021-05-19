import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/interfaces/product';






@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  ListProducts: Product[] = [
    {id: 1, name: 'Coca Cola', price: 1.0079, companyID: 1},
    {id: 2, name: 'Coca Cola', price: 2.0079, companyID: 1},
    {id: 3, name: 'Coca Cola', price: 3.0079, companyID: 1},
    {id: 4, name: 'Coca Cola', price: 31.0079, companyID: 2},
    {id: 5, name: 'Coca Cola2', price: 6.0079, companyID: 3},
    {id: 6, name: 'Coca Cola4', price: 1.0079, companyID: 1},
    {id: 7, name: 'Coca Cola', price: 91.0079, companyID: 1},
    {id: 8, name: 'Coca Cola', price: 0.0079, companyID: 1},
    {id: 9, name: 'Coca Cola', price: 3.0079, companyID: 1},
    {id: 10, name: 'Coca Cola', price: 21.0079, companyID: 1},
    {id: 11, name: 'Coca Cola', price: 1.0079, companyID: 1}

  ];

  displayedColumns: string[] = ['id', 'name', 'price', 'companyID', 'actions'];
  dataSource =  new MatTableDataSource(this.ListProducts);


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
