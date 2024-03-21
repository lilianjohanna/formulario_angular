import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DireccionUsuarioComponent } from './direccion-usuario.component';

describe('DireccionUsuarioComponent', () => {
  let component: DireccionUsuarioComponent;
  let fixture: ComponentFixture<DireccionUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DireccionUsuarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DireccionUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
