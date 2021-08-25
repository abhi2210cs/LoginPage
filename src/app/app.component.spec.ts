import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'login'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('login');
  });

  function updateForm(userEmail: any, userPassword: any) {
    component.loginForm.controls['username'].setValue(userEmail);
    component.loginForm.controls['password'].setValue(userPassword);
  }

  it('component initial state', () => {
    expect(component.loginForm).toBeDefined();
    expect(component.loginForm.invalid).toBeTruthy();
  });

  // it('form value should update from when u change the input', (() => {
  //   updateForm(component.loginForm.controls.email, component.loginForm.controls.password);
  //   expect(component.loginForm.value).toEqual(component.loginForm.controls.valid);
  // }));

  // it('Form invalid should be true when form is invalid', (() => {
  //   updateForm(component.loginForm.controls.email, component.loginForm.controls.password);
  //   expect(component.loginForm.invalid).toBeTruthy();
  // }));
});
