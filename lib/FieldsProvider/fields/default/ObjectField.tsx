import { FieldProps } from 'formik';
import React from 'react';
import FormGenerator from '../../..';
import { ObjectFieldSchema } from '../../../types/FormSchema';


const ObjectField: React.FunctionComponent<ObjectFieldSchema & FieldProps> = (props) => {
    const { field: {name}, schema } = props;
    return (
        <FormGenerator name={name} schema={schema} />
    );
}

export default ObjectField;