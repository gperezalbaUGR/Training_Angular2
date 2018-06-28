import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';
import { List } from '../models/List';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA) private newList :List
  ) { }

  ngOnInit() {
    this.newList={
      id: null,
      name: '',
      year: null,
      director: '',
      genre: '',
      cast:''
    }
  }

  onSubmit(){
    this.dialogRef.close() //no se si esta bien
  }

}
