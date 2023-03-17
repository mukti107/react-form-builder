import React, { useMemo } from 'react';
import {get, map, toPath, random} from 'lodash';
import {FieldArray, FieldArrayRenderProps} from 'formik';
import FormSchema, { ArrayFieldSchema } from '../../../types/FormSchema';
import FormGenerator from '../../..';

const render = (schema: FormSchema, options: Partial<ArrayFieldSchema>)=>({form: {values}, name, push, remove}: FieldArrayRenderProps) => {
    const fieldValues: any[] = get(values, name, [])
    return (
    <>
        {map(fieldValues, (fieldValue, index)=>{
            const fieldName = [...toPath(name), index];
            return(
                <div className="card  mb-3">
                    <div className="card-body">
                        <button type="button" className="close" aria-label="Close" onClick={()=>remove(index)}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <FormGenerator name={fieldName} schema={schema} />
                    </div>
                </div>
            )
        })}
        <button className='btn btn-info' type="button" onClick={() => push({id: random(Number.MAX_SAFE_INTEGER)})}>{options.addButtonLabel || '+ Add'}</button>
    </>)
}

const  ArrayField: React.FunctionComponent<Omit<ArrayFieldSchema, 'type'>> = (props) => {
    const {name, schema} = props;

    const renderFunction = useMemo(()=>render(schema, props), [schema]);

    return (
        <div className='form-group'>
            <FieldArray name={toPath(name).join('.')} render={renderFunction}  />
        </div>
    );
}

export default ArrayField;