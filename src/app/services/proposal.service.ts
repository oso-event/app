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
    return this.getProposals().then((storedPorposals: Array<Proposal>) => {
      if (storedPorposals) {
        storedPorposals.push(newProposal);
        return this.storage.set(STORAGE_KEY, storedPorposals);
      } else {
        return this.storage.set(STORAGE_KEY, new Array(newProposal));
      }
    });
  }

  getProposals(): Promise<Array<Proposal>> {
    return this.storage.get(STORAGE_KEY);
  }

}
