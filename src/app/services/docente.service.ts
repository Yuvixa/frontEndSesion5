import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

const urlbase = `${environment.apiUrl}/rest/docente/`;

@Injectable({
  providedIn: 'root',
})
export class DocenteService {
  constructor(private http: HttpClient) {}

  insertaDocente(docente: any): Observable<any> {
    return this.http.post(urlbase, docente);
  }
}
