import { FieldProps } from 'formik';
import { map, get, includes, union, without } from 'lodash';
import React, { MouseEventHandler, useCallback } from 'react';
import { ImageSelectFieldSchema } from '../../types/FormSchema';


const ImageSelectField: React.FunctionComponent<ImageSelectFieldSchema & FieldProps> = (props) => {
    const { options, label, field, form } = props;

    console.log(field.name, field.value);

    const onToggle: MouseEventHandler<HTMLImageElement> = useCallback((event)=>{
        const value = get(event.target, ['dataset', 'value']);
        const checked = get(event.target, ['dataset', 'checked']) === 'true';
        console.log(value, checked);
        if(!checked){
            form.setFieldValue(field.name, union(field.value, [value]) )
        } else {
            form.setFieldValue(field.name, without(field.value, value) )
        }
    }, [field, form.setFieldValue]);

    return (
        <div className="form-group">
            <label>{label}</label>
            <div className='form-control'>
            {map(options, option=>(
                <img onClick={onToggle} src={option.thumbnail} alt={option.label} data-value={option.value} data-checked={includes(field.value, option.value)} className="img-thumbnail" />
            ))}
            </div>
        </div>
    );
}

export default ImageSelectField;