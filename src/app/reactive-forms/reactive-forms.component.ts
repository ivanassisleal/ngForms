import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  personForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {

  }

  send()
  {
    if(this.personForm.valid)
      console.log('Valido');
  }

  createForm() {
    this.personForm = this.fb.group({
      firstName: ['',Validators.required],
      lastName: ['',Validators.required]
    });
  }

}
