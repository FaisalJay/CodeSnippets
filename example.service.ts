import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {
  constructor(private http: HttpClient) { }

  get() {
    return this.http.get('api/');
  }

  getById(id: string) {
    return this.http.get(`api/${id}`);
  }

  post(params: any) {
    return this.http.post('api/', params)
      .pipe(map(responce => {
        return responce;
      }));
  }

  postMultipart(formData: FormData, uploadPath: string) {
    return this.http.post(`api/${uploadPath}`, formData, { responseType: "text" })
  }

  updateCompany(id: string, params: any) {
    return this.http.patch(`api/${id}`, params);
  }

  deleteCompany(id: string) {
    return this.http.delete(`ap/${id}`);
  }
}
