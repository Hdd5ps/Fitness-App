import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WorkoutTrackerComponent } from './workout-tracker/workout-tracker.component';
import { CustomWorkoutComponent } from './custom-workout/custom-workout.component';
import { ProgressComponent } from './progress/progress.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'workout-tracker', component: WorkoutTrackerComponent },
  { path: 'custom-workout', component: CustomWorkoutComponent },
  { path: 'progress', component: ProgressComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }