import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Band } from '../interfaces/bands.interface';

@Injectable({
  providedIn: 'root'
})
export class BandsService {

  constructor( private http: HttpClient ) { }

  getBands(): Observable<Band[]> {
    return this.http.get<Band[]>('http://localhost:3000/bands');
  }

}