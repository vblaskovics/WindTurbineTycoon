import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  http: HttpClient = inject(HttpClient);

  getVersion(): Observable<string> {
    return this.http.get<string>('/api/version');
  }
}
