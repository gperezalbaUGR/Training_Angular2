import { Component, OnInit, ViewChild } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { MatPaginator, MatSort,MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none', opacity:'0.5'})),
      state('expanded', style({height: '200px', display: 'block',transform: 'scale(1.0)',backgroundColor: '#E5E7E9',color: '#1C2833',fontSize: '10px'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TablaComponent implements OnInit {

  dataSource = new MatTableDataSource(DATA_ELEMENT);
  columnsToDisplay = ['id', 'name', 'year', 'director', 'genre', 'cast', 'delete', 'edit'];
  expandedElement: List;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}

export interface List {

  id: number;
  name:string;
  year: number;
  director: string;
  genre: string;
  cast: string;
  description: string
}

const DATA_ELEMENT: List [] = [
  {id:1,name:"The lord of the rings",year:2001,director:"Peter Jackson",genre:"Fantasy",cast:"Orlando Bloom", description: 'asdkjjalsdjalkjaldfjlakjgdlasdjglasdjkasdglkjadsglkjag'},
  {id:2,name:"The lord of the rings",year:2001,director:"Peter Jackson",genre:"Fantasy",cast:"Orlando Bloom", description: 'asdkjjalsdjalkjaldfjlakjgdlasdjglasdjkasdglkjadsglkjag'},
  {id:3,name:"Avatar",year:2001,director:"Peter Jackson",genre:"Fantasy",cast:"Orlando Bloom", description: 'asdkjjalsdjalkjaldfjlakjgdlasdjglasdjkasdglkjadsglkjag'}
]

