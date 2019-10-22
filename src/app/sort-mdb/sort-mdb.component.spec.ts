import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortMdbComponent } from './sort-mdb.component';

describe('SortMdbComponent', () => {
  let component: SortMdbComponent;
  let fixture: ComponentFixture<SortMdbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortMdbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortMdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
