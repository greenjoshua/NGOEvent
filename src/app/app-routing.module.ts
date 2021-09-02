import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteguardGuard } from 'src/Services/routeguard.guard';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventManagementComponent } from './event-management/event-management.component';
import { EventregistrationdetailsComponent } from './eventregistrationdetails/eventregistrationdetails.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserviewComponent } from './userview/userview.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'eventmanagement', component: EventManagementComponent, canActivate: [RouteguardGuard] },
  { path: 'userview', component: UserviewComponent, canActivate: [RouteguardGuard] },
  { path: 'eventdetails/:id', component: EventDetailsComponent, canActivate: [RouteguardGuard] },
  { path: 'eventregistrationdetails/:id', component: EventregistrationdetailsComponent, canActivate: [RouteguardGuard] },
  { path: 'registration/:id', component: RegistrationComponent, canActivate: [RouteguardGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
