import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Params, Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
	email: any;
	message: any;
	clicked: boolean;
  constructor(private _httpService: HttpService,
  	private _router: Router) { }

  ngOnInit() {
  	this.clicked = false;
  	this.email = {
  		name: "",
  		email: "",
  		message: ""
  	}
  	this.message = "";
  	$('.home').fadeIn();
  	document.getElementById('projectLink').classList.remove('active');
	document.getElementById('homeLink').classList.remove('active');
	document.getElementById('contactLink').classList.add('active');
  }

  onSubmit(){
  	if((this.email.name.length > 3 && this.email.name.length < 50) && (this.email.message.length > 19 && this.email.message.length <= 1000)){
  		this.clicked = true
	  	let obs = this._httpService.sendEmail(this.email)
	  	obs.subscribe(data => {
	  		
	  		if((data as any).message == "Error"){
	  			console.log(data)
	  		} else {
	  			alert("Email Sent!");
	  			this.navHome();
	  			this._router.navigate(['']);

	  		}
	  	})
  	} else {
  		alert("Fill out form properly!");
  	}
  }

  navHome() {
  	$('.home').fadeIn();
  	document.getElementById('projectLink').classList.remove('active');
	document.getElementById('homeLink').classList.add('active');
	document.getElementById('contactLink').classList.remove('active');
  }
}
