import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'bands',
    loadChildren: () => import('./bands/bands.module').then( m => m.BandsModule )
  },
  {
    path: '**',
    redirectTo: 'bands'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
