import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Idea } from '../idea.model';
import { IdeaService } from '../idea.service';

@Component({
  selector: 'app-idea-detail',
  templateUrl: './idea-detail.component.html',
  styleUrls: ['./idea-detail.component.css'],
  providers: [IdeaService]
})
export class IdeaDetailComponent implements OnInit {
  ideaId: number;
  ideaToDisplay: Idea;

  constructor(private route: ActivatedRoute, private location: Location, private ideaService: IdeaService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.ideaId = parseInt(urlParameters['id']);
    });
    this.ideaToDisplay = this.ideaService.getIdeaById(this.ideaId);
  }

}
