interface JsonFormValidators {
    min?: number;
    max?: number;
    required?: boolean;
    requiredTrue?: boolean;
    email?: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: string;
    nullValidator?: boolean;
}

interface optionDetails {
    label:string ,
    value :string
}
interface JsonFormControlOptions {
    min?: string;
    max?: string;
    step?: string;
    icon?: string;
   
}
interface JsonFormControls {
    name: string;
    label: string;
    value: string;
    type: string;
    options?: JsonFormControlOptions;
    required: boolean;
    validators: JsonFormValidators;
    data?: optionDetails[]
}

export interface JsonFormData {
    controls: JsonFormControls[];
}

