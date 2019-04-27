import { Component, OnInit } from '@angular/core';
import { ProposalService } from '../../services/proposal.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  proposals: Array<any>;

  constructor(private proposalService: ProposalService) {}

  ngOnInit() {
    this.proposals = this.proposalService.getItems();
  }

}
