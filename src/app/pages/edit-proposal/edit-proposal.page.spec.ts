import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProposalPage } from './edit-proposal.page';

describe('EditProposalPage', () => {
  let component: EditProposalPage;
  let fixture: ComponentFixture<EditProposalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProposalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProposalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
