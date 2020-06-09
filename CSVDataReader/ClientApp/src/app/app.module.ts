import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CSVserviceService } from './shared/csvservice.service';
import { CsvDComponent } from './csv-d/csv-d.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { ErrorDialogComponent } from './csv-d/error-dialog/error-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    CsvDComponent,
    ErrorDialogComponent
  ],
  entryComponents: [ErrorDialogComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    RouterModule.forRoot([
    ])
  ],
  providers: [CSVserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
