import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app9';

  msgWelcome:string="Welcome to Angular";
  msgWish:string="";
  constructor(private httpClient: HttpClient) { }

   getWelcomeMsg(){
   //in eclipse this end point is run first and also make sure @CrossOrigin is added in the controller like @RestController
  // this is because in 1 machine 2 servers are running and in eclipse we can only run one server at a time
  //CORS (Cross-Origin Resource Sharing) is a security feature implemented by web browser to restrict making requests to different domains
  //than the one that is currently running. 
  //this is because of the same origin policy of browsers.
    this.httpClient.get("http://localhost:8080/welcome", {responseType: 'text'})
    .subscribe(response => {
      this.msgWelcome=response;
    });
  }

  getWishMsg(){
    this.httpClient.get("http://localhost:8080/wish", {responseType: 'text'})
    .subscribe(response => {
      this.msgWish=response;
    });
  }
}


