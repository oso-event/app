import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProposalService {

  proposals: Array<any> = [
    {
      id: 1,
      title: 'Example 1',
      speakers: 'María, Luisa',
      visible: true,
      votes: 0
    },
    {
      id: 2,
      title: 'Example 2',
      speakers: 'Alana',
      visible: true,
      votes: 0
    },
    {
      id: 3,
      title: 'Example 3',
      speakers: 'Irene',
      visible: true,
      votes: 0
    },
    {
      id: 4,
      title: 'Example 4',
      speakers: 'Juan',
      visible: true,
      votes: 0
    },
    {
      id: 5,
      title: 'Need a more complex app?',
      speakers: 'Luis',
      visible: true,
      votes: 0
    }
  ];

  constructor() { }

  getItems() {
    return this.proposals;
  }
}
