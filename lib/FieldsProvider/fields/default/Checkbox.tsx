import { FieldProps } from 'formik';
import { includes, map, union, without } from 'lodash';
import React, { ChangeEventHandler, useCallback } from 'react';
import { CheckboxFieldSchema } from '../../../types/FormSchema';


const CheckboxField: React.FunctionComponent<CheckboxFieldSchema & FieldProps> = (props) => {
    const { label, field } = props;

    return (
        <div className="form-group">
            <div className="form-check">
                <input className="form-check-input" type="checkbox" {...field} />
                <label className="form-check-label">
                {label}
                </label>
            </div>
        </div>
    );
}

export default CheckboxField;