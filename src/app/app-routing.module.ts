import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteguardGuard } from 'src/Services/routeguard.guard';
import { AddEventComponent } from './add-event/add-event.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventManagementComponent } from './event-management/event-management.component';
import { EventregistrationdetailsComponent } from './eventregistrationdetails/eventregistrationdetails.component';
import { LoginComponent } from './login/login.component';
import { RegistrationConfirmationComponent } from './registration-confirmation/registration-confirmation.component';
import { RegistrationPage2Component } from './registration-page2/registration-page2.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserviewComponent } from './userview/userview.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'eventmanagement', component: EventManagementComponent, canActivate: [RouteguardGuard] },
  { path: 'userview', component: UserviewComponent, canActivate: [RouteguardGuard] },
  { path: 'eventdetails/:id', component: EventDetailsComponent, canActivate: [RouteguardGuard] },
  { path: 'eventregistrationdetails/:id', component: EventregistrationdetailsComponent, canActivate: [RouteguardGuard] },
  { path: 'registration/:id', component: RegistrationComponent, canActivate: [RouteguardGuard] },
  { path: 'registration/:id/:adult/:child', component: RegistrationPage2Component, canActivate: [RouteguardGuard] },
  { path: 'registrationConfirmation', component: RegistrationConfirmationComponent, canActivate: [RouteguardGuard] },
  { path: 'addevent', component: AddEventComponent, canActivate: [RouteguardGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
