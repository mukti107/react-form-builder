import React from "react";
import { TextField, TextStyle } from "@shopify/polaris";
import { get } from "lodash";

const TextInput: React.FunctionComponent<any> = (props) => {
  const {
    label,
    placeholder,
    disabled,
    readOnly,
    hint,
    multiline,
    form,
    field,
    prefix,
  } = props;
  const error = get(form.errors, field.name);
  return (
    <TextField
      value={field.value}
      onChange={(text) => form.setFieldValue(field.name, text)}
      error={error}
      label={label}
      placeholder={placeholder}
      autoComplete="off"
      multiline={multiline}
      readOnly={readOnly}
      disabled={disabled}
      helpText={<TextStyle variation="subdued">{hint}</TextStyle>}
      prefix={prefix}
    />
  );
};

export default TextInput;
