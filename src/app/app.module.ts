import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatInputModule, MatSortModule, MatTableModule, MatDialogModule } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FilmListComponent } from './film-list/film-list.component';
import { AddDialogComponent } from './add-dialog/add-dialog.component';
import { FormComponent } from './form/form.component';
import { TablaComponent } from './tabla/tabla.component';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'

@NgModule({
  declarations: [
    AppComponent,
    FilmListComponent,
    AddDialogComponent,
    FormComponent,
    TablaComponent
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSortModule,
    MatTableModule,
    HttpModule,
    FormsModule,
    MatPaginatorModule,
    Angular2FontawesomeModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [FormComponent]
})
export class AppModule { }
