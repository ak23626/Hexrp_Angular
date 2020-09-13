import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import {CoinDetailsComponent} from '../coin-details/coin-details.component'

const routes: Routes = [
  { path : 'coin-details', component : CoinDetailsComponent },
  { path : 'recycle', component : HomeComponent },
  { path : '', redirectTo : '/coin-details', pathMatch : 'full' },
  {
    path: 'home',
    component: CoinDetailsComponent,
    data: { title: 'Home' }
  },
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
