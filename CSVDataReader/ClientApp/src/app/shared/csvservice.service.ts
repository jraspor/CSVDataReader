import { Person } from './person.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CSVserviceService {
  people: Person[];
  url = 'https://localhost:44397/api';

  constructor(
    private http: HttpClient
  ) { }

  public getCSVData = (): Promise<Person[]> => {
    return this.http.get<Person[]>(this.url + '/People/CSV').toPromise();
  }
}
