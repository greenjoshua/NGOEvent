import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EventService } from 'src/Services/events-service.service';
import { EventDetailsComponent } from '../event-details/event-details.component';

@Component({
  selector: 'app-event-management',
  templateUrl: './event-management.component.html',
  styleUrls: ['./event-management.component.css']
})
export class EventManagementComponent implements OnInit {

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

  openDialog() {
    const dialogRef = this.dialog.open(EventDetailsComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
