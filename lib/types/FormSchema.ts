import { HTMLInputTypeAttribute } from "react";
import { Condition } from "../utils/condition-helper";

type FieldVisibility = boolean | Condition;

export type FieldName = string | string[] | (string|number)[];

export interface SingleFieldSchema {
    name: FieldName;
    type: string;
    label: string;
    hint?:string;
    defaultValue?: any;
    disabled?: boolean;
    readOnly?: boolean;
    /** @default true */
    visible?: FieldVisibility;
    [key:string]: any;
};

export interface InputFieldSchema extends SingleFieldSchema {
    type: Exclude<HTMLInputTypeAttribute, 'radio'>;
    placeholder?: string;
}

export interface OptionSchema {
    label: string;
    value: string;
}

export interface SelectFieldSchema extends SingleFieldSchema {
    type: 'select' | 'tag';
    multiple?: boolean;
    options: OptionSchema[];
}

export interface CheckboxFieldSchema extends SingleFieldSchema {
    type: 'checkbox';
}

export interface RadioButtonsFieldSchema extends SingleFieldSchema {
    type: 'radio-buttons';
    options: OptionSchema[];
}

export interface ImageOptionSchema extends OptionSchema{
    thumbnail: string;
}

export interface ImageSelectFieldSchema extends SingleFieldSchema {
    type: 'image-select';
    options: ImageOptionSchema[];
}

export interface CheckboxesFieldSchema extends SingleFieldSchema {
    type: 'checkboxes';
    options: OptionSchema[];
}

export interface FieldSetSchema {
    visible?: FieldVisibility;
    name?: FieldName;
    schema: FieldSchema[];
    [key:string]: any;
}

export interface ArrayFieldSchema extends FieldSetSchema {
    name: FieldName;
    type: 'array';
    label: string;
    addButtonLabel?: string;
    defaultValue?: any[];
};

export interface ObjectFieldSchema extends FieldSetSchema {
    name: FieldName;
    type: 'object';
    defaultValue?: any;
};

export interface SectionFieldSchema extends FieldSetSchema {
    label: string;
    type: 'section';
};

export interface RowSchema extends FieldSetSchema {
    type: 'row';
};

export type FieldSchema = SingleFieldSchema | InputFieldSchema | SelectFieldSchema | RadioButtonsFieldSchema | CheckboxesFieldSchema | ArrayFieldSchema | ObjectFieldSchema | SectionFieldSchema;

export type FormSchema = FieldSchema[];

export default FormSchema;