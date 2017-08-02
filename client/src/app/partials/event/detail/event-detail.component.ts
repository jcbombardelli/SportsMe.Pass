import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { EventService } from "../event.service";

@Component({
  selector: 'event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {


  id: number;
  inscricao: Subscription;
  event: any;

  constructor(
    private route: ActivatedRoute, 
    private eventService: EventService, 
    private router: Router) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
        this.event = this.eventService.GetEvent(this.id);

        if(this.event == null){
          this.router.navigate(['/events']);
        }
      }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
