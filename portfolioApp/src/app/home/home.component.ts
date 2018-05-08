import { Component, OnInit } from '@angular/core';
import { Params, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  	
  }

  buttonClick() {
  	console.log("pressed")
  	this._router.navigate(['contact'])
  }

}
