import { Component, OnInit } from '@angular/core';
import { Idea } from '../idea.model';
import { Router } from '@angular/router';
import { IdeaService } from '../idea.service';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css'],
  providers: [IdeaService]
})
export class MarketplaceComponent implements OnInit {
  ideas: Idea[] = [];

  goToDetailPage(clickedIdea: Idea){
    this.router.navigate(['ideas', clickedIdea.id])
  }

  constructor(private router: Router, private ideaService: IdeaService) { }

  ngOnInit() {
    this.ideas = this.ideaService.getIdeas();
  }

}
