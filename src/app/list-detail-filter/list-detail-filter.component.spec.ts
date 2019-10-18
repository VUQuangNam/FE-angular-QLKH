import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDetailFilterComponent } from './list-detail-filter.component';

describe('ListDetailFilterComponent', () => {
  let component: ListDetailFilterComponent;
  let fixture: ComponentFixture<ListDetailFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDetailFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDetailFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
