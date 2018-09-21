import Validator from 'validator';
import isEmpty from 'lodash.isempty';

export default function validateInput(data){

    let errors = {};

    if(Validator.isEmpty(data.locationName)){
        errors.locationName = 'This field is required';
    }  
    
    return {
        errors, isValid : isEmpty(errors)
    }
}