import { Component, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { Router } from '@angular/router';
import { EventService } from 'src/Services/events-service.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit, ControlValueAccessor {
  @Input() progress: any;
  onChange: Function | undefined;
  private file: File | null = null;

  @HostListener('change', ['$event.target.files']) emitFiles( event: FileList ) {
    const file = event && event.item(0);
    if (file) {
      this.file = file;
      this.fileName = file.name;
    }
  }
  event: any;
  eventModel: any;
  errorMsg: any;
  fileTest: any;
  fileName: string | undefined;

  constructor(private eventService: EventService, private router: Router,  private host: ElementRef<HTMLInputElement>) {
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
      eventImage: this.file,
      adultPrice: "",
      childPrice: ""
    }
  }

  ngOnInit(): void {
  }

  save() {
    console.log(this.event);
    this.eventModel.eventImage = this.fileName;
    console.log("THE FILENAME IS: " + this.fileName);
    this.eventService.postEvent(this.eventModel).subscribe(
      (data) => {
        console.log(data);
        this.event = data;
      },
      (error) => this.errorMsg = error
    );

    this.eventService.postFile(this.file).subscribe(
      (data) => {
        console.log(data);
        this.fileTest = data;
      },
      (error) => this.errorMsg = error
    );
    // this.eventService.post(this.eventModel, this.file).subscribe(
    //   (data) => {
    //     console.log("Data from save() method in add component");
    //     console.log(data);
    //     this.event = data;
    //   },
    //   (error) => this.errorMsg = error
    // );
    this.router.navigate(['eventmanagement']);
  }

  close() {
    this.router.navigate(['eventmanagement']);
  }

  onSubmit() {
    console.log(this.file);
    
  }

  writeValue( value: null ) {
    // clear file input
    this.host.nativeElement.value = '';
    this.file = null;
  }

  registerOnChange( fn: Function ) {
    this.onChange = fn;
  }

  registerOnTouched( fn: Function ) {
  }

}
