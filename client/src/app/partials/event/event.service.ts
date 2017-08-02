import { Injectable } from "@angular/core";

@Injectable()
export class EventService {

  constructor() { }

  GetEvents() {
    return [
      {
        id: 1,
        name: "Santos x Palmeiras",
        typeEvent: "soccer",
        date: "21/10/2016"
      },
      {
        id: 2,
        name: "Paraná x Curitiba",
        typeEvent: "soccer",
        date: "21/10/2016"
      },
      {
        id: 3,
        name: "Santos Tsunami x Palmeiras Locomotives",
        typeEvent: "football",
        date: "21/10/2016"
      }
    ];
  }
  
  GetEvent(id: number) {
    let events = this.GetEvents();

    for (var i = 0; i < events.length; i++) {
      let event = events[i];
      if (event.id == id) {
        return event;
      }
    }
    return null;
  }
}