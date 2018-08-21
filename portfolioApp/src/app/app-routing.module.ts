import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { PinkslipsComponent } from './pinkslips/pinkslips.component';
import { RacecarComponent } from './racecar/racecar.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'projects', component: PinkslipsComponent },
	{ path: 'about', component: ContactComponent },
	//{ path: 'pinkslips', component: PinkslipsComponent },
	//{ path: 'racecar', component: RacecarComponent},
	//{ path: 'portfolio', component: PortfolioComponent},
	{ path: '**',   redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
