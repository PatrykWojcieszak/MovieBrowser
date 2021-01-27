import { EntertainmentDetailsComponent } from './Modules/EntertainmentDetails/EntertainmentDetails/EntertainmentDetails.component';
import { HomePageComponent } from './Modules/HomePage/HomePage/HomePage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'home/:id',
    component: EntertainmentDetailsComponent,
  },
  {
    path: '**',
    redirectTo: '/home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
