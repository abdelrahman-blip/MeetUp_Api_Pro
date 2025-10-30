import { HttpClient } from '@angular/common/http';
import { Component, Inject, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
 // imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [NgFor]
})
export class AppComponent {
  title = 'client';
  users : any;

  private http = inject(HttpClient);
  constructor(){
    this.http.get('https://localhost:5001/Api/Users')
    .subscribe(data => this.users = data);
    // .subscribe
    // ({
    //   next : response => this.users = response,
    //   error : error =>  console.error(error),
    //   complete : () => console.log('request completed')
      
    // });
  }
}
