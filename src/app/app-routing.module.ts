import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventManagementComponent } from './event-management/event-management.component';
import { LoginComponent } from './login/login.component';
import { UserviewComponent } from './userview/userview.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'eventmanagement', component: EventManagementComponent },
  { path: 'userview', component: UserviewComponent},
  { path: 'eventdetails/:id', component: EventDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
