import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitLandPageComponent } from './git-land-page.component';

describe('GitLandPageComponent', () => {
  let component: GitLandPageComponent;
  let fixture: ComponentFixture<GitLandPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitLandPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitLandPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
