import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  // styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

	userCreatedStatus: String = "Offline";
	userName = ""; 
	Email = ""; 

  constructor() { }

  ngOnInit(): void {
  }

  changeUserStatus() {
  	this.userCreatedStatus = (this.userCreatedStatus == "Offline") ? "Online": "Offline";
  }

  updateUserName(event: any) {
  	console.log(event.target);
  	this.userName = event.target.value;
  }
}
