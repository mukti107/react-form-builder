import { Checkbox as PolarisCheckbox } from "@shopify/polaris";
import { get } from "lodash";
const Checkbox: React.FunctionComponent<any> = (props) => {
  const {
    label,
    field,
    form: { setFieldValue },
  } = props;
  const value = get(field, "value", false);
  return (
    <PolarisCheckbox
      label={label}
      checked={value}
      onChange={() => setFieldValue(field.name, !value)}
    />
  );
};

export default Checkbox;
