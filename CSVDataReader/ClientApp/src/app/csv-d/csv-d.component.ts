import { Person } from './../shared/person.model';
import { CSVserviceService } from './../shared/csvservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-csv-d',
  templateUrl: './csv-d.component.html',
})
export class CsvDComponent implements OnInit {
  people: Person[];

  constructor(
    private service: CSVserviceService
  ) { }

  ngOnInit(): void {
  }

  loadCSV() {
    this.service.getCSVData().then((result: Person[]) => {
      this.people = result;
    });
  }

  isNaN(person: Person): boolean {
    return Number.isNaN(Number(person.postalCode));
  }
}
