import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventComponent } from "./event.component";
import { EventListComponent } from './list/event-list.component';
import { EventDetailComponent } from './detail/event-detail.component';
import { EventEditComponent } from './edit/event-edit.component';
import { EventService } from "./event.service";
import { EventRoutingModule } from "./event.routing.module";



@NgModule({
  imports: [
    CommonModule,
    EventRoutingModule
  ],
  declarations: [
    EventComponent, 
    EventListComponent, 
    EventDetailComponent, 
    EventEditComponent
  ],
  providers : [EventService]
})
export class EventModule { }
