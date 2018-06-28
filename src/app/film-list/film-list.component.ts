import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MatTableDataSource } from '@angular/material';
import { FormComponent } from '../form/form.component';
import { List } from '../models/List';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {

  formDialogRef: MatDialogRef<FormComponent>;

  public lists: List[]=[];
  columnsToDisplay = ['Id', 'Name', 'Year', 'Director', 'Genre', 'Cast', 'Delete', 'Edit'];
  dataSource = new MatTableDataSource();

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    
  }

  openDialog(list?){
    this.formDialogRef = this.dialog.open(FormComponent, {
      data: {
        id: list ? list.id : null
      }
    });
    this.formDialogRef.afterClosed()
    //llamar al servicio=?
  }
}

const DATA_ELEMENT: List [] = [
  {id:1,name:"The lord of the rings",year:2001,director:"Peter Jackson",genre:"Fantasy",cast:"Orlando Bloom"},
  {id:1,name:"The lord of the rings",year:2001,director:"Peter Jackson",genre:"Fantasy",cast:"Orlando Bloom"}
]

