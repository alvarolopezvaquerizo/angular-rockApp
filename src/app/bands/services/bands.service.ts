import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Band } from '../interfaces/bands.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BandsService {

  private baseUrl: string = environment.baseUrl;

  constructor( private http: HttpClient ) { }

  getBands(): Observable<Band[]> {
    return this.http.get<Band[]>('http://localhost:3000/bands');
  }

  getBandForId( id: number ): Observable<Band> {
    return this.http.get<Band>(`${ this.baseUrl }/bands/${ id }`);
  }

  addBand( band: Band ): Observable<Band> {
    return this.http.post<Band>(`${ this.baseUrl }/bands`, band);
  }

  updateBand( band: Band ): Observable<Band> {
    return this.http.put<Band>(`${ this.baseUrl }/bands/${ band.id }`, band);
  }

  deleteBand( id: number ): Observable<any> {
    return this.http.delete<any>(`${ this.baseUrl }/bands/${ id }`);
  }

}