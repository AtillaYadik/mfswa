import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `<div>
    Hello {{ value }}
    <div>{{ message }}</div>
  </div>`,
})
export class AppComponent {
  value = 'World';
  message = '';

  constructor(private http: HttpClient) {
    this.http
      .get('/api/message')
      .subscribe((res: any) => (this.message = res.text));
  }
}
