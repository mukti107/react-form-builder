import { FieldProps } from 'formik';
import React from 'react';
import FormGenerator from '../../..';
import { SectionFieldSchema } from '../../../types/FormSchema';


const SectionField: React.FunctionComponent<SectionFieldSchema & FieldProps> = (props) => {
    const { label, field: {name}, schema } = props;
    return (
        <div className="card">
            <div className="card-header">{label}</div>
            <div className="card-body">
                <FormGenerator name={name} schema={schema} />
            </div>
        </div>
    );
}

export default SectionField;