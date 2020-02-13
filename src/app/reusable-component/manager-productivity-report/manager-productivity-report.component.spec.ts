import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerProductivityReportComponent } from './manager-productivity-report.component';

describe('ManagerProductivityReportComponent', () => {
  let component: ManagerProductivityReportComponent;
  let fixture: ComponentFixture<ManagerProductivityReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerProductivityReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerProductivityReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
