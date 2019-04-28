import { Proposal } from './Proposal';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

const STORAGE_KEY = 'storedProposals';

@Injectable({
  providedIn: 'root'
})
export class ProposalService {

  proposals: Array<Proposal> = [];

  constructor(private storage: Storage) { }

  addProposal(title, description) {
    const newProposal = new Proposal(Math.random(), title, description, true, 0);
    this.proposals.push(newProposal);
  }

  getProposals(): Array<Proposal> {
    return this.proposals;
  }

}
