import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { EventService } from 'src/Services/events-service.service';

@Component({
  selector: 'app-eventregistrationdetails',
  templateUrl: './eventregistrationdetails.component.html',
  styleUrls: ['./eventregistrationdetails.component.css']
})
export class EventregistrationdetailsComponent implements OnInit {

  eventId: any;
  event: any;
  errorMsg: any;
  registration: boolean = true;

  constructor(private eventService: EventService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      console.log("ID: " + id);
      this.eventId = id;
      console.log("Event Id: " + this.eventId);
    });

    this.eventService.getEvents().subscribe(
      (data) => {
        this.eventService.getEventById(this.eventId).subscribe(
          (data) => {
            this.event = data;
            console.log("Event from event registration: ");
            console.log(this.event);
            this.registration = !!this.event.registration;
          },
          (error) => this.errorMsg = error
        )
      },
      (error) => this.errorMsg = error
    )
  }

  onClickRegistration(event: any) {
    this.router.navigate(['registration/', event.id]);
    console.log("routing to registration page: ");
    console.log(event);
  }

}
