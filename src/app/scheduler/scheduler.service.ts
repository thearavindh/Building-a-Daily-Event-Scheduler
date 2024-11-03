import { Injectable } from '@angular/core';

interface Event {
  start_time: number;
  end_time: number;
}

@Injectable({ providedIn: 'root' })
export class SchedulerService {
  private events: Event[] = [];

  addEvent(event: Event): boolean {
    const overlap = this.events.some(
      (e) => e.start_time < event.end_time && e.end_time > event.start_time
    );
    if (!overlap) {
      this.events.push(event);
      return true;
    }
    return false;
  }

  getEvents(): Event[] {
    return this.events;
  }
}
