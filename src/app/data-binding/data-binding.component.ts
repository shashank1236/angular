import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  // styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

	userId = 10;
	userStatus = "Offline";

  constructor() { }

  ngOnInit(): void {
  }

  getUserStatus() {
  	return this.userStatus;
  }

}
