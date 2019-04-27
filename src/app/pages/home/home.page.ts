import { Component, OnInit } from '@angular/core';
import { ProposalService } from '../../services/proposal.service';
import { Proposal } from 'src/app/services/Proposal';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  proposals: Array<Proposal>;

  constructor(private proposalService: ProposalService) {}

  ngOnInit() {
    this.proposalService.getProposals().then((props) => {
      this.proposals = props;
    });
  }

}
