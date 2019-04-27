import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProposalPage } from './new-proposal.page';

describe('NewProposalPage', () => {
  let component: NewProposalPage;
  let fixture: ComponentFixture<NewProposalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewProposalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProposalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
