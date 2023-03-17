import { FieldProps } from 'formik';
import React from 'react';
import { Card } from '@shopify/polaris';
import FormGenerator from '../../..';
import { SectionFieldSchema } from '../../../types/FormSchema';


const SectionField: React.FunctionComponent<SectionFieldSchema & FieldProps> = (props) => {
    const { label, field: {name}, schema } = props;
    return (
        <Card title={label} sectioned>
            <FormGenerator name={name} schema={schema} />
        </Card>
    );
}

export default SectionField;