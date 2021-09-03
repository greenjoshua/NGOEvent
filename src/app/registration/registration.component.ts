import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Registrant } from 'src/models/Registrant';
import { EventService } from 'src/Services/events-service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  event: any;
  errorMsg: any;
  public empModel: Registrant = {
    firstName: "",
    lastName: "",
    emailAddress: "",
    contactNumber: "",
    address: "",
    adultQuantity: "",
    childQuantity: ""
  };

  constructor(private  eventService: EventService, private router: Router, private route: ActivatedRoute) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id') || "";
      console.log("ID: " + id);
      this.eventService.getEvents().subscribe(
        (data) => {
          this.eventService.getEventById(id).subscribe(
            (data) => {
              this.event = data;
            },
            error => this.errorMsg = error
          )
        },
        (error) => this.errorMsg = error
      );
        
    });
    
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.router.navigate(['registration/',this.event.id, this.empModel.adultQuantity, this.empModel.childQuantity]);
  }

}
