import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmWalletComponent } from './farm-wallet.component';

describe('FarmWalletComponent', () => {
  let component: FarmWalletComponent;
  let fixture: ComponentFixture<FarmWalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FarmWalletComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarmWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
