import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SubContentComponent } from './sub-content.component';

describe('SubContentComponent', () => {
  let component: SubContentComponent;
  let fixture: ComponentFixture<SubContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubContentComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SubContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
