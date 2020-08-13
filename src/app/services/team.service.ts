import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map, retry } from 'rxjs/operators';
import { Testimonials } from '../models/testimonials';



@Injectable({
  providedIn: 'root'
})
export class TeamService {


  constructor(private http: HttpClient) { }


  getListOfTestimonials(): Observable<Testimonials> {
    return this.http.get<Testimonials>(environment.api)
      .pipe(
        map((users: Testimonials) => {
          return users
        })
      );
  }
}
