import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelefonoUsuarioComponent } from './telefono-usuario.component';

describe('TelefonoUsuarioComponent', () => {
  let component: TelefonoUsuarioComponent;
  let fixture: ComponentFixture<TelefonoUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelefonoUsuarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TelefonoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
