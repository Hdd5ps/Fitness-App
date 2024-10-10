import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  private apiUrl = `${environment.apiUrl}/workouts`;

  constructor(private http: HttpClient) {}

  getAllWorkouts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  createWorkout(workout: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, workout);
  }
}