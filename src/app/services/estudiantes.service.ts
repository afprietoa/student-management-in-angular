import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from 'src/environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {
private apiUrl = environment.apiUrl;
httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + environment.token
  })
}
  constructor(
    private http: HttpClient
  ) { }
  obtenerEstudiantes(): Observable<any> {
    return this.http.get(this.apiUrl + 'estudiantes', this.httpOptions);
  }

  registrarEstudiante(estudiante: any): Observable<any> {

    return this.http.post(this.apiUrl + 'estudiantes', estudiante, this.httpOptions);

  }

  consultarEstudiante(id: number): Observable<any>{
    return this.http.get(this.apiUrl + 'estudiantes/' + id,this.httpOptions);
  }
  actualizarEstudiante(id:number, estudiante: any): Observable<any>{
    return this.http.put(this.apiUrl + 'estudiantes/' + id, estudiante,this.httpOptions )
  }

  inhabilitarEstudiante(id:number, estudiante: any): Observable<any>{
    return this.http.put(this.apiUrl + 'estudiantes/estado/' + id, estudiante,this.httpOptions )
  }

}
