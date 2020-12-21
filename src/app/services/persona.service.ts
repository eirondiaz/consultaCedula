import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../Models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private _http: HttpClient) { }

  consultar(ced): Observable<Persona> {
    return this._http.get<Persona>(`https://api.adamix.net/apec/cedula/${ced.cedula}`)
  }

}
