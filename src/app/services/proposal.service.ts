import { Proposal } from './Proposal';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class ProposalService {

  proposals: Array<Proposal>;

  constructor(private storage: Storage) { }

  createProposal(title, description) {
    const randomId = Math.random();
    this.proposals.push(new Proposal(randomId, title, description, true, 0));
  }

  getProposals() {
    return this.storage.get('proposals');
  }

  save() {
    this.storage.set('proposals', this.proposals);
  }
}
