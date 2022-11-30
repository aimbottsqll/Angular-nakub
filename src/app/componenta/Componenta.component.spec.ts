import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ComponentaComponent } from './Componenta.component'

  describe('ComponentaComponent', () => {
    let component: ComponentaComponent;
    let fixture: ComponentFixture<ComponentaComponent>;
  
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ ComponentaComponent ]
      })
      .compileComponents();
  
      fixture = TestBed.createComponent(ComponentaComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
