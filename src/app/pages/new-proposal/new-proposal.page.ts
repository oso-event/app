import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ProposalService } from 'src/app/services/proposal.service';
@Component({
  selector: 'app-new-proposal',
  templateUrl: './new-proposal.page.html',
  styleUrls: ['./new-proposal.page.scss'],
})
export class NewProposalPage implements OnInit {

  newProposalForm: FormGroup;

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    public proposalService: ProposalService
  ) { }

  ngOnInit() {
    this.newProposalForm = this.formBuilder.group({
      title: new FormControl('', Validators.required),
      speakers: new FormControl('', Validators.required)
    });
  }

  createProposal(value) {
    this.proposalService.addProposal(value.title, value.description);
    this.router.navigate(['home']);
  }

}
