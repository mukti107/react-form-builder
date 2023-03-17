import React, { ChangeEventHandler, useCallback } from 'react';
import {map, union, without, includes} from 'lodash';
import { RadioButtonsFieldSchema, SelectFieldSchema } from '../../../types/FormSchema';
import { FieldProps } from 'formik';


const CheckboxesField: React.FunctionComponent<RadioButtonsFieldSchema & FieldProps> = (props) => {
    const { options, label, field, form } = props;

    const onChange: ChangeEventHandler<HTMLInputElement> = useCallback((event)=>{
        const value = event.target.value;
        const currentValue = field.value;
        if(event.target.checked){
            form.setFieldValue(field.name, union(currentValue, [value]) )
        } else {
            form.setFieldValue(field.name, without(currentValue, value) )
        }
    }, [field, form.setFieldValue]);

    return (
        <div className="form-group">
            <label>{label}</label>
            {map(options, option=>(
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" {...field} checked={includes(field.value, option.value)} onChange={onChange} value={option.value} />
                    <label className="form-check-label">
                    {option.label}
                    </label>
                </div>
            ))}
        </div>
    );
}

export default CheckboxesField;