import { Proposal } from './Proposal';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class ProposalService {

  proposals: Array<Proposal> = [];

  constructor(private storage: Storage) { }

  createProposal(title, description) {
    const randomId = Math.random();
    this.proposals.push(new Proposal(randomId, title, description, true, 0));
    this.save();
  }

  async getProposals(): Promise<Array<Proposal>> {
    return await this.storage.get('proposals');
  }

  private save() {
    this.storage.set('proposals', this.proposals);
  }
}
