import React, { useCallback } from "react";
import { TextField, TextStyle, Button, Label, Stack } from "@shopify/polaris";
import { get } from "lodash";

const ToggleField = (props) => {
  const {
    fieldInfo = {},
    label = fieldInfo.label,
    hint = fieldInfo.hint,
    form,
    field,
    onLabel = "Activate",
    offLabel = "Deactivate",
    description,
    onDescription = description,
    offDescription = description,
  } = props;
  const error = get(form.errors, field.name);

  const isOn = !!field.value;
  const isOff = !isOn;

  const toggle = useCallback(() => {
    form.setFieldValue(field.name, !field.value);
  }, [field.name, field.value, form.setFieldValue]);

  const descriptionToDisplay = isOn ? onDescription : offDescription;

  return (
    <>
      <div>
        <Stack alignment="center">
          <Stack.Item fill>
            <Label>{label}</Label>
            <TextStyle variation="subdued">{hint}</TextStyle>
          </Stack.Item>
          <Button onClick={toggle} primary={isOff} monochrom={isOn}>
            {isOn ? offLabel : onLabel}
          </Button>
        </Stack>
      </div>
      {descriptionToDisplay}
      <TextStyle variation="negative">{error}</TextStyle>
    </>
  );
};

ToggleField.selector = "toggle";

export default ToggleField;
