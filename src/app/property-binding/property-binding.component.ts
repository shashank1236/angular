import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  // styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

	btn_enable_disable = false;


	constructor() { 
		setTimeout(() => {
			// alert("Enabled");
			this.btn_enable_disable = true;
		}, 5000)
	}

	ngOnInit(): void {
	}



}
