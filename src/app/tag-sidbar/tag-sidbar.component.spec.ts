import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagSidbarComponent } from './tag-sidbar.component';

describe('TagSidbarComponent', () => {
  let component: TagSidbarComponent;
  let fixture: ComponentFixture<TagSidbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TagSidbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TagSidbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
