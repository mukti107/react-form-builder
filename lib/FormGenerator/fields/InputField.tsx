import { FieldProps } from 'formik';
import { get, isEmpty } from 'lodash';
import React from 'react';
import { InputFieldSchema } from '../../types/FormSchema';


const InputField: React.FunctionComponent<InputFieldSchema&FieldProps> = (props) => {
    const { type, label, hint, field, placeholder, form: { errors } } = props;
    const error = get(errors, field.name);
    const isInvalid = !isEmpty(error);
    return (
        <div className="form-group">
            <label>{label}</label>
            <input type={type} className={`form-control ${isInvalid && 'is-invalid'}`} placeholder={placeholder} {...field} />
            {error && <div className="invalid-feedback">
                {String(error)}
            </div>}
            {hint && <small className="form-text text-muted">{hint}</small>}
        </div>
    );
}

export default InputField;