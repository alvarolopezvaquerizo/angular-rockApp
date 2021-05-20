import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BandsRoutingModule } from './bands-routing.module';
import { ListBandsComponent } from './pages/list-bands/list-bands.component';
import { NewBandComponent } from './pages/new-band/new-band.component';
import { MainComponent } from './pages/main/main.component';
import { ViewBandComponent } from './pages/view-band/view-band.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { FilterPipe } from './pipes/filter.pipe';


@NgModule({
  declarations: [
    ListBandsComponent,
    NewBandComponent,
    MainComponent,
    ViewBandComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    BandsRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class BandsModule { }
