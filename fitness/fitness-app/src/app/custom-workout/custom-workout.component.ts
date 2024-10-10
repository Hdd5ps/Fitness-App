import { Component } from '@angular/core';
import { WorkoutService } from '../workout.service';

@Component({
  selector: 'app-custom-workout',
  templateUrl: './custom-workout.component.html',
  styleUrls: ['./custom-workout.component.css']
})
export class CustomWorkoutComponent {
  workout = { name: '', duration: 0 };

  constructor(private workoutService: WorkoutService) {}

  createWorkout(): void {
    this.workoutService.createWorkout(this.workout).subscribe();
  }
}