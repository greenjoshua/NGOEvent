import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { EventManagementComponent } from './event-management/event-management.component';
import { LoginComponent } from './login/login.component';
import { UserviewComponent } from './userview/userview.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { EventregistrationdetailsComponent } from './eventregistrationdetails/eventregistrationdetails.component';
import { RegistrationComponent } from './registration/registration.component';
import { RegistrationConfirmationComponent } from './registration-confirmation/registration-confirmation.component';
import { RegistrationPage2Component } from './registration-page2/registration-page2.component';
import { AddEventComponent } from './add-event/add-event.component';
import { EventService } from 'src/Services/events-service.service';

@NgModule({
  declarations: [
    AppComponent,
    EventManagementComponent,
    LoginComponent,
    UserviewComponent,
    EventDetailsComponent,
    EventregistrationdetailsComponent,
    RegistrationComponent,
    RegistrationConfirmationComponent,
    RegistrationPage2Component,
    AddEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
    FormsModule
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
