import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NivelesService {
  private url = 'https://5d6b8a75-98a9-474d-a987-e9c24fcea34e.mock.pstmn.io/v1/siiu-seguimiento-proyectos/niveles';

  constructor(private http: HttpClient) { }

  getNiveles(pageSize: number, pageNumber: number): Observable<any> {
    const headers = {
      'message-uuid': '<uuid>',
      'request-app-id': '<uuid>',
      'Accept': 'application/json'
    };
    const params = {
      pageSize: pageSize.toString(),
      pageNumber: pageNumber.toString()
    };
    return this.http.get(this.url, { headers: headers, params: params });
  }


}
