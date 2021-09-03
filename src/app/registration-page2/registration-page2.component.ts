import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { EventService } from 'src/Services/events-service.service';

@Component({
  selector: 'app-registration-page2',
  templateUrl: './registration-page2.component.html',
  styleUrls: ['./registration-page2.component.css']
})
export class RegistrationPage2Component implements OnInit {

  errorMsg: any;
  event: any;
  childQuantity: number = 0;
  adultQuantity: number = 0;
  totalChildPrice: number = 0;
  totalAdultPrice: number = 0;

  constructor(private route: ActivatedRoute, private router: Router, private eventService: EventService) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id') || "";
      let adultQuantity = params.get('adult');
      let childQuantity = params.get('child');

      if(adultQuantity) {
        this.adultQuantity = Number(adultQuantity);
      }
      if(childQuantity) {
        this.childQuantity = Number(childQuantity);
      }

      this.eventService.getEvents().subscribe(
        (data) => {
          this.eventService.getEventById(id).subscribe(
            (data) => {
              this.event = data;
              this.totalChildPrice = this.event.childPrice * this.childQuantity;
              this.totalAdultPrice = this.event.adultPrice * this.adultQuantity;
            },
            (error) => this.errorMsg = error
          )
        },
        (error) => this.errorMsg = error
      );

      

      console.log(id);
      console.log(childQuantity);
      console.log(adultQuantity);
    });
  }

  ngOnInit(): void {
  }

  confirm() {
    this.router.navigate(['registrationConfirmation']);
  }

}
