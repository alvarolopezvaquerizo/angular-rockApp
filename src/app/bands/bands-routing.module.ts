import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListBandsComponent } from './pages/list-bands/list-bands.component';
import { NewBandComponent } from './pages/new-band/new-band.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'list-bands', component: ListBandsComponent },
      { path: 'new-band', component: NewBandComponent },
      { path: '**', redirectTo: 'list-bands' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BandsRoutingModule { }
