import { Injectable } from '@angular/core';
import { Http, Headers,Response } from '@angular/http';
import { Observable } from 'rxjs';
import { List } from '../models/List';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http: Http) { }

  private serverApi= 'http://localhost:3000';

  
  public getAllLists():Observable<List[]>{

    let URI = `${this.serverApi}/movies`;
    return this.http.get(URI)
      .map((res:Response) => res.json())
  }

  public deleteList(listId:number){
    let URI = `${this.serverApi}/movies/${listId}`;
    let headers = new Headers;
    headers.append('Content-Type', 'application/json');
    return this.http.delete(URI, {headers})
    .map((res:Response) => res.json());
  }

  public addList(list: List){
    let URI = `${this.serverApi}/movies`;
    let headers = new Headers;
    let body = JSON.stringify({id:list.id, name: list.name, year:list.year, director: list.director, genre: list.genre, cast: list.cast});
    console.log(body);
    headers.append('Content-Type', 'application/json');
    return this.http.post(URI, body, {headers: headers})
    .map((res:Response)=> res.json());
  }
}