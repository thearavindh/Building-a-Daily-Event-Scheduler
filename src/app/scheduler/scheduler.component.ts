import { Component } from '@angular/core';
import { SchedulerService } from './scheduler.service';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent {
  start_time = 0;
  end_time = 1;
  events: any[] = []; 

  constructor(private schedulerService: SchedulerService) {
    this.events = this.schedulerService.getEvents(); 
  }

  addEvent() {
    const eventAdded = this.schedulerService.addEvent({
      start_time: this.start_time,
      end_time: this.end_time,
    });
    if (eventAdded) {
      this.events = this.schedulerService.getEvents();
    } else {
      alert('Event overlaps with an existing one.');
    }
  }
}
