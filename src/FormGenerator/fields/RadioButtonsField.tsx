import React from 'react';
import {map} from 'lodash';
import { RadioButtonsFieldSchema, SelectFieldSchema } from '../../types/FormSchema';
import { FieldProps } from 'formik';


const RadioButtonsField: React.FunctionComponent<RadioButtonsFieldSchema & FieldProps> = (props) => {
    const { options, label, field, multiple } = props;
    return (
        <div className="form-group">
            <label>{label}</label>
            {map(options, option=>(
                <div className="form-check">
                    <input className="form-check-input" type="radio" {...field} value={option.value} />
                    <label className="form-check-label">
                    {option.label}
                    </label>
                </div>
            ))}
        </div>
    );
}

export default RadioButtonsField;