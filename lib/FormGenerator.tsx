import React, { useContext, useMemo } from 'react';
import { toPath, isEmpty, isBoolean, map, get, filter } from 'lodash';
import { Field, useFormikContext } from 'formik';
import FormSchema, { FieldName, FieldSchema } from './types/FormSchema';
import { checkCondition } from './utils/condition-helper';
import FieldsContext from './FieldsProvider/FieldsContext';

interface RenderFieldProp {
    parentPath?: string[];
    field: FieldSchema;
}
export const RenderField: React.FunctionComponent<RenderFieldProp> = ({field, parentPath})=>{
    const fields = useContext(FieldsContext);
    const { type, name: fieldName, ...fieldProps } = field;

    const nameWithParent = [...(parentPath || []), ...toPath(fieldName)].join('.');
        if(type === 'array'){
            const {schema, ...remainingFieldProps} = fieldProps;
            return <div><fields.array name={nameWithParent} key={nameWithParent} schema={schema} {...remainingFieldProps} /></div>;
        }
        const FieldComponent: React.FunctionComponent<any> = fields[type]||fields.input;
        return <div>
                <Field name={nameWithParent} key={nameWithParent} type={type}  component={FieldComponent} {...fieldProps} />
            </div>;
}

interface FormGeneratorProps {
    name?: FieldName;
    schema: FormSchema
};
const FormGenerator: React.FunctionComponent<FormGeneratorProps> = ({name, schema}) => {

    const parentPath = toPath(name);
    const { values } = useFormikContext();

    const parentValues = isEmpty(parentPath)? values  : get(values, parentPath) ;

    const filteredSchema = useMemo(()=>{
        return filter(schema, ({visible = true})=>{
            if(isBoolean(visible)) return visible;
            return checkCondition(parentValues, visible);
        });
    }, [schema, parentValues]);

    return map(filteredSchema, (field) => <RenderField field={field} parentPath={parentPath} />) as unknown as React.ReactElement<any, any>;
}

export default FormGenerator;