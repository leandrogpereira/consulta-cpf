import { Component } from '@angular/core';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormValidation } from '../shared/form-validation';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {displayDefaultIndicatorType: false},
    },
  ],

})
export class HomeComponent {

  public cpfValido = false;
  public submitted = false;
  public form: FormGroup;

  constructor(
    private _fb: FormBuilder
  ) {
    this.form = this._fb.group({
      cpf: ['', [Validators.required, FormValidation.verificaCpf]]
    });
  }

  onSubmit() {
    this.submitted = true;
    this.form.valid ? this.cpfValido = true : this.cpfValido = false;
  } 

}
