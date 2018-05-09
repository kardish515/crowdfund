import { Component, OnInit } from '@angular/core';
import { Idea } from '../idea.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css']
})
export class MarketplaceComponent implements OnInit {
  ideas: Idea[] = [
    new Idea("Helium tires to make your car float", "Nick Kardish", "Just like it sounds, I want to make helium filled tires to make cars float", 4000, "1 free helium tire", 1),
    new Idea("Poop", "Poopy Poopperson", "Make a poo poo", 10000, "1 free poo", 2)
  ];

  goToDetailPage(clickedIdea: Idea){
    this.router.navigate(['ideas', clickedIdea.id])
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
