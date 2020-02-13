import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTableTreeviewComponent } from './custom-table-treeview.component';

describe('CustomTableTreeviewComponent', () => {
  let component: CustomTableTreeviewComponent;
  let fixture: ComponentFixture<CustomTableTreeviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomTableTreeviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomTableTreeviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
