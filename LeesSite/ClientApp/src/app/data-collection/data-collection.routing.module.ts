import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DataCollectionComponent } from './components'

const routes: Routes = [
  {
    path: '',
    component: DataCollectionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DataCollectionRoutingModule { }
