import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorreoUsuarioComponent } from './correo-usuario.component';

describe('CorreoUsuarioComponent', () => {
  let component: CorreoUsuarioComponent;
  let fixture: ComponentFixture<CorreoUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorreoUsuarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CorreoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
