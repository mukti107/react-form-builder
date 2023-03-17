import styled from "styled-components";
import { isEqual, get, map } from "lodash";
import { RadioButtonsFieldSchema } from "../../../types/FormSchema";
import { FieldProps } from "formik";
const Container = styled.div({
  paddingTop: 10,
  paddingBottom: 10,
});

const Wrapper = styled.div({
  display: "flex",
  flexDirection: "column",
});

const RadioButton = styled.input({});

const Label = styled.label({
  cursor: "pointer",
  fontSize: "13px",
  display: "flex",
});

const RadioButtons: React.FunctionComponent<RadioButtonsFieldSchema & FieldProps> = ({ field, label: fieldLabel, form, options }) => {
  const { setFieldValue } = form;

  return (
    <Container>
      <label>{fieldLabel}</label>
      <Wrapper>
        {map(options, ({label, value}) => (
          <Label>
            <RadioButton
              type="radio"
              value={value}
              onClick={() => {
                setFieldValue(field.name, value);
              }}
              checked={isEqual(value, field.value)}
            />
            {label}
          </Label>
        ))}
      </Wrapper>
    </Container>
  );
};

export default RadioButtons;
