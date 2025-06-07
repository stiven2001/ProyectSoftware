import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environmenrt';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Cita } from '../components/Agendar/models/postCitas';

@Injectable({
  providedIn: 'root'
})
export class ServicesagendarService {

  private apiUrl = `${environment.apiUrl}`;
  URL_AGENDAR_POST = this.apiUrl + '/Agendar';
  URL_CONSULTAR_GET = this.apiUrl + '/Agendar/Consultar';
  URL_CONSULTAR__CANCELAR_GET = this.apiUrl + '/Agendar/ConsultarActivas';
  URL_CONSULTAR__CANCELAR_PUT = this.apiUrl + '/Agendar/Cancelar';




  constructor(private http: HttpClient) { }

  
agendarCita(cita: Cita): Observable<any> {
   return this.http.post(this.URL_AGENDAR_POST, cita, {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  });
  }

 consultarCita(tipoDocumento: string, documento: string): Observable<any> {
    const params = new HttpParams()
      .set('tipoDocumento', tipoDocumento)
      .set('documento', documento);

    return this.http.get<any[]>( this.URL_CONSULTAR_GET, { params });
  }

  ConsultaCancelarCita(tipoDocumento: string, documento: string): Observable<any> {
    const params = new HttpParams()
      .set('tipoDocumento', tipoDocumento)
      .set('documento', documento);

    return this.http.get<any[]>( this.URL_CONSULTAR__CANCELAR_GET, { params });
  }

  CancelarCita(id: number): Observable<any> {
  return this.http.put<any>(`${this.URL_CONSULTAR__CANCELAR_PUT}/${id}`, {});
}



}
