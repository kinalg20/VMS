import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { JsonFormData } from '../model/custom';

@Component({
  selector: 'custom-form-builder',
  templateUrl: './custom-form-builder.component.html',
  styleUrls: ['./custom-form-builder.component.scss']
})
export class CustomFormBuilderComponent implements OnInit {
  @Input() jsonFormData : JsonFormData = {controls:[{name : '' , label : '' , required : false ,  type : '' , value : '' , validators : {}}]};
  public myForm: FormGroup = this.fb.group({});
  customJson : JsonFormData = {
    controls: [
      {
        name : "firstName",
        label : "",
        value :"",
        type : "text",
        required : false,
        validators: {
          required: true
        }
      },
      {
        name : "lastName",
        label : "",
        value :"",
        type : "text",
        required : true,
        validators: {
          required: true
        }
      },
      {
        name : "gender",
        label : "gender",
        value :"",
        type : "radio",
        required : true,
        data : [{label : 'Male' , value : 'M'} , {label : 'Female' , value : 'F'}],
        validators: {
          required: true
        }
      },
      {
        name: "agreeTerms",
        label: "This is a checkbox?",
        value: "true",
        type: "checkbox",
        required : false,
        validators: {}
      }
    ]
  }
  constructor(private fb: FormBuilder) { 
    
  }

  ngOnInit(): void {
    this.jsonFormData.controls = this.customJson.controls;
    this.createForm(this.jsonFormData.controls); 
    console.log(this.jsonFormData?.controls);
       
  }

  createForm(controls : JsonFormData["controls"]){
    console.log(controls);   
    for (const control of controls) {
      const validatorsToAdd = [];
      for (const [key, value] of Object.entries(control.validators)) {
        switch (key) {
          case 'min':
            validatorsToAdd.push(Validators.min(Number(value)));
            break;
          case 'max':
            validatorsToAdd.push(Validators.max(Number(value)));
            break;
          case 'required':
            if (value) {
              validatorsToAdd.push(Validators.required);
            }
            break;
          case 'requiredTrue':
            if (value) {
              validatorsToAdd.push(Validators.requiredTrue);
            }
            break;
          case 'email':
            if (value) {
              validatorsToAdd.push(Validators.email);
            }
            break;
          case 'minLength':
            validatorsToAdd.push(Validators.minLength(Number(value)));
            break;
          case 'maxLength':
            validatorsToAdd.push(Validators.maxLength(Number(value)));
            break;
          case 'pattern':
            validatorsToAdd.push(Validators.pattern(String(value)));
            break;
          case 'nullValidator':
            if (value) {
              validatorsToAdd.push(Validators.nullValidator);
            }
            break;
          default:
            break;
        }
      }
      this.myForm.addControl(control.name,this.fb.control(control.value, validatorsToAdd));
    } 
  }

  onSubmit() {
    console.log('Form valid: ', this.myForm.valid);
    console.log('Form values: ', this.myForm.value);
  }

}
