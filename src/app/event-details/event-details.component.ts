import { Component,Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { EventService } from 'src/Services/events-service.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  event: any;
  errorMsg: any;

  constructor(public dialogRef: MatDialogRef<EventDetailsComponent>, @Inject(MAT_DIALOG_DATA) public data: { id: string }, private eventService: EventService) {
    let id = data.id;
    this.eventService.getEvents().subscribe(
      (data) => {
        this.eventService.getEventById(id).subscribe(
        (data) => {
          this.event = data;
        },
        (error) => this.errorMsg = error
      )
      },
      (error) => this.errorMsg = error
      );
  }

  ngOnInit(): void {
    
  }

  close() {
    this.dialogRef.close();
  }

  /*save() {
    this.eventService.getEvents().subscribe(
      (data) => {
        console.log("....Updating Event");
        console.log(this.event);
        this.eventService.updateEvent(this.event.id, this.event);
      },
      (error) => this.errorMsg = error
    );
    this.dialogRef.close();
  }*/

  save() {
    console.log(this.event);
    console.log(this.event.id);
    this.eventService.updateEvent(this.event.id, this.event).subscribe(
      (data) => {this.event = data; console.log(data);
        this.eventService.getEvents().subscribe(
          (data) => this.event = data,
          (error) => this.errorMsg = error
        )
      },
      (error) => {this.errorMsg = error; console.log(error); }
    );
    this.dialogRef.close();
  }

}
