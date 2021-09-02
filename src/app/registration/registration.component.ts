import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/Services/events-service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  event: any;
  errorMsg: any;
  public empModel: any;

  constructor(private  eventService: EventService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(empForm: any) {
    
    
  }

}
