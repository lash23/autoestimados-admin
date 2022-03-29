import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EstimationsService {

  API_URL = environment.API_URL + '/estimations'
  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get(`${this.API_URL}/get-all`);
  }

  getById(id) {
    return this.http.get(`${this.API_URL}/${id}`);
  }

  createBudget(data, id) {
    return this.http.patch(`${this.API_URL}/estimate/${id}`, data);
  }

  saveNote(data, id) {
    return this.http.patch(`${this.API_URL}/add-note/${id}`, data);
  }

  requestEstimation(data: any) {
    const formData = new FormData()
    for (const key in data) {
      if (key == 'images') {
        for (const img of data[key]) {
          formData.append(key, img);
        }
      } else {
        formData.append(key, data[key]);
      }
    }
    return this.http.post(`${this.API_URL}/create`, formData);
  }
}
