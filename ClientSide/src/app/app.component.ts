import { HttpClient } from '@angular/common/http';
import { Component, Inject, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'client';
  users : any;
  // constructor(private http :HttpClient){};
  // ngOnInit() {
  //   this.http.get('https://localhost:5001/Api/Users')
  //   .subscribe(data => this.users = data);
  // }

  private http = inject(HttpClient);
  constructor(){
    this.http.get('https://localhost:5001/Api/Users')
    .subscribe(data => this.users = data);
  }
}
