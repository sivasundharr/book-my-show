import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MovielistComponent } from './components/movielist/movielist.component';
import { BookingListComponent } from './components/booking-list/booking-list.component';

const routes: Routes = [
 
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'movies',component:MovielistComponent},
  {path:'booking',component:BookingListComponent},
  {path:'',redirectTo:'home',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
