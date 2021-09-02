import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/Services/events-service.service';

@Component({
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.css']
})
export class UserviewComponent implements OnInit {

  errorMsg: any;
  events: any;
  event: any;

  constructor(private eventService: EventService, private router: Router) { }

  ngOnInit(): void {
    this.eventService.getEvents().subscribe(
      (data) => this.events = data,
      (error) => this.errorMsg = error,
      () => console.log("Data retrieval completed")
    );
  }

  onClick(event: any) {
    this.router.navigate(['eventregistrationdetails/', event.id])
    console.log("User registration event: ")
    console.log(event);
  }

}
