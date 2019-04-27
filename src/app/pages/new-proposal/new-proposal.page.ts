import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
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

  goBack() {
    this.router.navigate(['/home']);
  }

  createItem(value) {
    this.proposalService.createProposal(value.title, value.description);
    this.newProposalForm.reset();
    this.goBack();
  }

}
