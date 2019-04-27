import { Proposal } from './Proposals';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProposalService {

  proposals: Array<Proposal> = [
      new Proposal ( 1, 'Example 1', 'María, Luisa', true, 0 ),
      new Proposal ( 2, 'Example 2', 'Alana', true, 0 ),
      new Proposal ( 3, 'Example 3', 'Irene', true, 0 ),
      new Proposal ( 4, 'Example 4', 'Juan', true, 0 ),
      new Proposal ( 5, 'Need a more complex app?', 'Luis', true, 0 ),
    ];

  constructor() { }

  getItems() {
    return this.proposals;
  }
}
