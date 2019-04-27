import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProposalService {

  proposals: Array<any> = [
    {
      id: 1,
      title: 'Example 1',
      speaker: 'María',
      visible: true,
      votes: 0
    },
    {
      id: 2,
      title: 'Example 2',
      speaker: 'Alana',
      visible: true,
      votes: 0
    },
    {
      id: 3,
      title: 'Example 3',
      speaker: 'Irene',
      visible: true,
      votes: 0
    },
    {
      id: 4,
      title: 'Example 4',
      speaker: 'Juan',
      visible: true,
      votes: 0
    },
    {
      id: 5,
      title: 'Need a more complex app?',
      speaker: 'Luis',
      visible: true,
      votes: 0
    }
  ];

  constructor() { }

  getItems() {
    return this.proposals;
  }
}
