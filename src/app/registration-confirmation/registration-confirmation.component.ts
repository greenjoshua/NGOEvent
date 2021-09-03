import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/Services/events-service.service';

@Component({
  selector: 'app-registration-confirmation',
  templateUrl: './registration-confirmation.component.html',
  styleUrls: ['./registration-confirmation.component.css']
})
export class RegistrationConfirmationComponent implements OnInit {

  constructor(private router: Router, private eventService: EventService) { }

  ngOnInit(): void {
  }

  onClick() {
    //this.router.navigate(['registrationConfirmation']);
  }

}
