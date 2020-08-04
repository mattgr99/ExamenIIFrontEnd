import { Component, OnInit } from '@angular/core';
import { Beca } from 'src/app/models/beca';
import { BecaService } from 'src/app/services/beca.service';
import { ActivatedRoute } from '@angular/router';
import { faUser, faIdCard, faCalendar, faMapMarked, faGenderless, faBook,faCashRegister } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-beca-card',
  templateUrl: './beca-card.component.html',
  styleUrls: ['./beca-card.component.css']
})
export class BecaCardComponent implements OnInit {
  
  faBook=faBook;
  faCashRegister=faCashRegister;
  faUser = faUser;
  faIdCard = faIdCard;
  faCalendar = faCalendar;
  faMapMarked = faMapMarked;
  faGenderless = faGenderless;
  beca:Beca;
  constructor(private becaService: BecaService, 
    private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        if(params['id']){
          this.becaService.retrieve(params['id']).subscribe(
            result => { 
              this.beca = result; 
              
            }
          )
        }
      }
    );
  }



}
