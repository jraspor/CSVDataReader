import { Person } from './../shared/person.model';
import { CSVserviceService } from './../shared/csvservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-csv-d',
  templateUrl: './csv-d.component.html',
  styles: []
})
export class CsvDComponent implements OnInit {
  loaded = false;
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
}
