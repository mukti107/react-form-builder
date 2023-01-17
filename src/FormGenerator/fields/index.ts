import React from "react";
import { FieldSchema } from "../../types/FormSchema";
import ArrayField from "./ArrayField";
import CheckboxField from "./Checkbox";
import CheckboxesField from "./CheckboxesField";
import ImageSelectField from "./ImageSelectField";
import InputField from "./InputField";
import ObjectField from "./ObjectField";
import RadioButtonsField from "./RadioButtonsField";
import SectionField from "./SectionField";
import SelectField from "./SelectField";
import TagsInput from "./TagsInput";

const fields: {[key: FieldSchema['type']]: React.FunctionComponent<any>} = {
    array: ArrayField,
    section: SectionField,
    select: SelectField,
    'image-select': ImageSelectField,
    input: InputField,
    object: ObjectField,
    'radio-buttons': RadioButtonsField,
    checkboxes: CheckboxesField,
    checkbox: CheckboxField,
    tag: TagsInput,
};

export default fields;