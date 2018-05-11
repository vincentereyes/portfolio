import { Component } from '@angular/core';
import { HttpService } from './http.service'
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public ngOnInit() {
  	$(document).ready(function() {
  		$('#projectLink').click(function(){
				document.getElementById('projectLink').classList.add('active');
				document.getElementById('homeLink').classList.remove('active');
				document.getElementById('contactLink').classList.remove('active');
				$('.home').fadeIn();
			});
  		$('.project-link').click(function() {
			$('.home').fadeIn();
		});
  		$('#homeLink').click(function(){
  				
				document.getElementById('projectLink').classList.remove('active');
				document.getElementById('homeLink').classList.add('active');
				document.getElementById('contactLink').classList.remove('active');
				$('.home').fadeIn();
			});
  		$('#contactLink').click(function(){
  			contact();
		});
		$('#btn-contact').click(function() {
			contact();
		});

		function contact(){
			document.getElementById('projectLink').classList.remove('active');
			document.getElementById('homeLink').classList.remove('active');
			document.getElementById('contactLink').classList.add('active');
			$('.home').fadeIn();
		}
  	});
  }
}
