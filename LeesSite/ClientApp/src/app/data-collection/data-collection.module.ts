import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataCollectionRoutingModule } from './data-collection.routing.module';
import { DataCollectionComponent } from './components'

import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    DataCollectionComponent
  ],
  imports: [
    CommonModule,
    DataCollectionRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatDialogModule,
    MatCheckboxModule,
    MatOptionModule,
    MatSelectModule
  ],
  exports: [
    DataCollectionComponent
  ]
})
export class DataCollectionModule { }
