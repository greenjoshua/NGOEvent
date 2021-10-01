import { Component,ElementRef,HostListener,Inject, OnInit } from '@angular/core';
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
  file: any;
  fileName: any;
  isChecked: any;

  onChange: Function | undefined;
  @HostListener('change', ['$event.target.files']) emitFiles( event: FileList ) {
    const file = event && event.item(0);
    if (file) {
      this.file = file;
      this.fileName = file.name;
    }
    console.log(this.file);
    console.log(this.fileName);
  }

  constructor(public dialogRef: MatDialogRef<EventDetailsComponent>, @Inject(MAT_DIALOG_DATA) public data: { id: string }, private eventService: EventService, private host: ElementRef<HTMLInputElement>) {
    let id = data.id;
    this.eventService.getEvents().subscribe(
      (data) => {
        this.eventService.getEventById(id).subscribe(
        (data) => {
          this.event = data;
          if(this.event.registration == 'false') {
            this.isChecked = false
          } else {
            this.isChecked = true;
          }
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

  delete() {
    if(this.event != undefined) {
      let id = this.event.id;
      this.eventService.delete(id).subscribe(
        (data) => {
          console.log(data);
        },
        (error) => this.errorMsg = error
      )
    }

    this.dialogRef.close();
  }

  save() {
    console.log(this.event);
    if(this.isChecked == false) {
      this.event.registration = 'false';
    } else {
      this.event.registration = 'true';
    }
    
    if (this.file) {
      this.eventService.postFile(this.file).subscribe(
        (data) => {
          console.log(data);
          this.file = data;
        },
        (error) => this.errorMsg = error
      );
    }

    if(this.fileName) {
      this.event.eventImage = this.fileName;
    }

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

    console.log(this.file);
    console.log(this.fileName);
  }


}
