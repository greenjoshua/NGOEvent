import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/Services/events-service.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  event: any;
  eventModel: any;
  errorMsg: any;

  constructor(private eventService: EventService, private router: Router) {
    this.eventModel = {
      eventName: "",
      eventDescription: "",
      category: "",
      startDate: "",
      endDate: "",
      startTime: "",
      endTime: "",
      location: "",
      registration: "",
      eventImage: "",
      adultPrice: "",
      childPrice: ""
    }
  }

  ngOnInit(): void {
  }

  save() {
    console.log(this.event);
    this.eventService.post(this.eventModel).subscribe(
      (data) => {
        this.event = data;
      },
      (error) => this.errorMsg = error
    );
    this.router.navigate(['eventmanagement']);
  }

  close() {
    this.router.navigate(['eventmanagement']);
  }

  onSubmit(eventForm: any) {
    
  }

}
