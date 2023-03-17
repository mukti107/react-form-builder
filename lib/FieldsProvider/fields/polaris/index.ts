import '@shopify/polaris/build/esm/styles.css';
import Fields from "../../../types/Fields";
import Checkbox from "./Checkbox";
import TextInput from "./TextInput";
import SelectField from './SelectField';
import SectionField from './SectionField';

const polarisFields: Fields = 
{
  checkbox: Checkbox,
  input: TextInput,
  select: SelectField,
  section: SectionField,
}

export default polarisFields;
