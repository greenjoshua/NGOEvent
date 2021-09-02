import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
//import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
//private modalService: NgbModal

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EventDetailsComponent>) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }

}
