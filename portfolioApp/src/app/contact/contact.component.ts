import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	$('.home').fadeIn();
  	document.getElementById('projectLink').classList.remove('active');
	document.getElementById('homeLink').classList.remove('active');
	document.getElementById('contactLink').classList.add('active');
  }

}
