import { Injectable } from '@angular/core';
import { Idea } from './idea.model';
import { IDEAS } from './mock-ideas';

@Injectable()
export class IdeaService {

  constructor() { }

  getIdeas() {
    return IDEAS;
  }

  getIdeaById(ideaId: number) {
    for (var i = 0; i <= IDEAS.length -1; i++){
      if(IDEAS[i].id === ideaId){
        return IDEAS[i];
      }
    }
  }

}
