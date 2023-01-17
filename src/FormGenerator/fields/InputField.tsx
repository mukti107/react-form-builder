// import { FieldProps } from 'formik';
// import { get, isEmpty } from 'lodash';
// import React from 'react';
// import { InputFieldSchema } from '../../types/FormSchema';


// const InputField: React.FunctionComponent<InputFieldSchema&FieldProps> = (props) => {
//     const { type, label, hint, field, placeholder, form: { errors } } = props;
//     const error = get(errors, field.name);
//     const isInvalid = !isEmpty(error);
//     return (
//         <div className="form-group">
//             <label>{label}</label>
//             <input type={type} className={`form-control ${isInvalid && 'is-invalid'}`} placeholder={placeholder} {...field} />
//             {error && <div className="invalid-feedback">
//                 {String(error)}
//             </div>}
//             {hint && <small className="form-text text-muted">{hint}</small>}
//         </div>
//     );
// }

// export default InputField;

import React, { useState } from 'react';
import { useField, FieldMetaProps, FieldHelperProps, FieldProps } from 'formik';
import styled from 'styled-components';
import { space, color, layout, typography } from 'styled-system';

interface TextInputProps {
  id?: string;
  label?: string;
  success?: string;
}

const InputWrapper = styled.div<TextInputProps>({
  position: 'relative',
},
space,
layout
);

const StyledInput = styled.input<TextInputProps>({
  width: '100%',
  borderRadius: '4px',
  '&:focus': {
    outline: 'none',
    borderColor: '#2196f3'
  },
},
space,
color,
typography
  );

const ErrorText = styled.p<TextInputProps>({
        position: 'absolute',
        bottom: '-1.5rem',
        left: 0,
    },
    space,
    color,
    typography
);

const TextInput: React.FC<TextInputProps & FieldProps> = (props) => {
    const { label } = props;
    const [field, meta] = useField(props.field.name);

  return (
    <InputWrapper {...props}>
      {label && <label htmlFor={props.id || props.field.name}>{label}</label>}
      <StyledInput {...field} />
      {meta && meta.touched && meta.error && (
        <ErrorText color="red">{meta.error}</ErrorText>
      )}
    </InputWrapper>
  );
};

export default TextInput;
