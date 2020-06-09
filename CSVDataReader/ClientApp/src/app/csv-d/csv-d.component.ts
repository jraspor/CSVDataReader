import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { Person } from './../shared/person.model';
import { CSVserviceService } from './../shared/csvservice.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-csv-d',
  templateUrl: './csv-d.component.html',
})
export class CsvDComponent implements OnInit {
  people: Person[];
  peopleSave: Person[];
  errorMsg = false;

  constructor(
    private service: CSVserviceService,
    public dialog: MatDialog
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

  saveToDB(people: Person[]) {
    if (!isNullOrUndefined(people)) {
      this.purgeErrors(people);
      this.service.saveData(this.peopleSave);
    } else {
      this.openDialog();
    }
  }

  openDialog() {
    this.dialog.open(ErrorDialogComponent);
  }

  purgeErrors(people: Person[]) {
    this.peopleSave = this.peopleSave || [];
    people.forEach(element => {
      if (!this.isNaN(element)) {
        this.peopleSave.push(element);
      }
    });
  }
}
