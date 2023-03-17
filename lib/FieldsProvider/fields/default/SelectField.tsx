import React from 'react';
import {map} from 'lodash';
import { SelectFieldSchema } from '../../../types/FormSchema';
import { FieldProps } from 'formik';


const SelectField: React.FunctionComponent<SelectFieldSchema & FieldProps> = (props) => {
    const { options, label, field, multiple } = props;
    return (
        <div className="form-group">
            <label>{label}</label>
            <select multiple={multiple} className="form-control" {...field}>
                {map(options, ({label, value})=><option value={value}>{label}</option>)}
            </select>
        </div>
    );
}

export default SelectField;