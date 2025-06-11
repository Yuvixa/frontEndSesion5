import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ubigeo } from '../models/ubigeo.model';
import { environment } from 'src/environments/environment.prod';

const urlbase = `${environment.apiUrl}/rest/util/`;


@Injectable({
  providedIn: 'root',
})
export class UbigeoService {
  constructor(private http: HttpClient) {}

  listaDepartamentos(): Observable<string[]> {
    return this.http.get<string[]>(urlbase + 'listaDepartamentos');
  }

  listaProvincias(departamento: any): Observable<string[]> {
    return this.http.get<string[]>(urlbase + 'listaProvincias/' + departamento);
  }

  listaDistritos(departamento: any, provincia: any): Observable<Ubigeo[]> {
    return this.http.get<Ubigeo[]>(
      urlbase + 'listaDistritos/' + departamento + '/' + provincia
    );
  }
}
