import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessContactsListComponent } from './business-contacts-list.component';

describe('BusinessContactsListComponent', () => {
  let component: BusinessContactsListComponent;
  let fixture: ComponentFixture<BusinessContactsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusinessContactsListComponent]
    });
    fixture = TestBed.createComponent(BusinessContactsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
