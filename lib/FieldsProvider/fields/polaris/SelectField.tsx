import React from "react";
import {  Text, Select } from "@shopify/polaris";
import { get } from "lodash";
import { FieldProps } from "formik";
import { SectionFieldSchema } from "../../../types/FormSchema";

const SelectField: React.FunctionComponent<SectionFieldSchema & FieldProps> = (props) => {
  const { label, options, placeholder, disabled, hint, form, field } = props;
  const error = get(form.errors, field.name) as string;
  return (
    <Select
      label={label}
      placeholder={placeholder}
      options={options}
      onChange={(v) => form.setFieldValue(field.name, v)}
      value={field.value}
      disabled={disabled}
      error={error}
      helpText={hint}
    />
  );
};

export default SelectField;
