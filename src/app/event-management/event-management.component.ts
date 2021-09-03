import { Component, OnChanges, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EventService } from 'src/Services/events-service.service';
import { EventDetailsComponent } from '../event-details/event-details.component';

@Component({
  selector: 'app-event-management',
  templateUrl: './event-management.component.html',
  styleUrls: ['./event-management.component.css']
})
export class EventManagementComponent implements OnInit, OnChanges {

  errorMsg: any;
  events: any;

  constructor(private eventService: EventService, private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.eventService.getEvents().subscribe(
      (data) => {
        console.log(data);
        this.events = data;
      },
      (error) => this.errorMsg = error
    )
  }

  ngOnChanges(): void {
    this.eventService.getEvents().subscribe(
      (data) => {
        console.log(data);
        this.events = data;
      },
      (error) => this.errorMsg = error
    )
  }

  openEditDialog(event: any) {
    const dialogRef = this.dialog.open(EventDetailsComponent, {
      data: { id: event.id }
    });
  }

  addEvent() {
    this.router.navigate(['addevent']);
  }

}
