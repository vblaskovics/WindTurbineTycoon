import { HttpClient } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'
import { Observable, catchError, map, of } from 'rxjs'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  apiUrl: string = `${environment.apiUrl}/api`
  http: HttpClient = inject(HttpClient)

  getVersion(): Observable<string> {
    return this.http.get<{ version: string }>(`${this.apiUrl}/version`).pipe(
      map((res) => res.version),
      catchError((err) => {
        console.log('Server version error', err)
        return of('-')
      })
    )
  }
}
