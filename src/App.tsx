import { Formik } from 'formik'
import {get} from 'lodash';
import FormGenerator from './FormGenerator'
import FormSchema from './types/FormSchema'
import '../index.css';

const fieldSchema: FormSchema = [
  {type: 'select', label: 'Type', name: 'type', options: [
    {label: 'Text', value: 'input'},
    {label: 'Select', value: 'select'},
    {label: 'Image select', value: 'image-select'},
    {label: 'Checkbox(True/False)', value: 'checkbox'},
    {label: 'Radio buttons', value: 'radio-buttons'},
    {label: 'Checkboxes', value: 'checkboxes'},
    {label: 'Array', value: 'array'},
    {label: 'Section', value: 'section'},
    {label: 'Object', value: 'object'},
  ]},
  {type: 'input', label: 'Label', name: 'label'},
  {type: 'input', label: 'Add button label', name: 'Add button label', hint: "Label for add button", visible: ['type', '=', 'array']},
  {type: 'input', label: 'Name', name: 'name', hint: 'Is a key for the form field(unique identifier)'},
  {type: 'checkbox', label: 'Required', name: 'required'},
  { 
    type: 'array',
    name: 'options',
    label: 'Options',
    addButtonLabel: "Add option",
    schema: [
      {type: 'input', label: 'Label', name: 'label'},
      {type: 'input', label: 'Value', name: 'value'},
    ],
    visible: ['type', 'isIn', ['select', 'radio-buttons', 'checkboxes']],
  },
  { 
    type: 'array',
    name: 'options',
    label: 'Options',
    addButtonLabel: "Add option",
    schema: [
      {type: 'input', label: 'Image URL', name: 'thumbnail'},
      {type: 'input', label: 'Alt text', name: 'label'},
      {type: 'input', label: 'Value', name: 'value'},
    ],
    visible: ['type', '=', 'image-select'],
  },
  {
    type: 'tag',
    name: 'tag',
    label: 'Tag',
  }
];

fieldSchema.push({
  type: 'array',
  label: 'Fields',
  name: 'schema',
  addButtonLabel: "Add field",
  schema: fieldSchema,
  visible: ['type', 'isIn', ['array', 'section', 'object']],
})

const schema: FormSchema = [
  {
    type: 'array',
    label: "Form fields",
    name: 'schema',
    addButtonLabel: 'Add form field',
    schema:fieldSchema,
  },
  // {
  //   type: 'object',
  //   name: 'user',
  //   schema:[
  //     {type: 'input', label: 'First name', name: 'firstName'},
  //     {type: 'input', label: 'Last name', name: 'lastName'},
  //     {type: 'select', label: 'Gender', name: 'gender', options: [
  //       {label: 'Male', value: 'm'},
  //       {label: 'Fermale', value: 'f'},
  //     ]},
  //   ]
  // }
]

function App() {
  return (
    <div className="App">
      <Formik onSubmit={console.log} initialValues={{}}>
        {({values, isValid})=>(<div className="container">
          <form >
          <div className='row'>
            <div className='col'>
              <FormGenerator name="form" schema={schema} />
              <pre>
                {JSON.stringify(get(values, ['form', 'schema']), null, 2)}
              </pre>
            </div>
            <div className='col'>
              <FormGenerator name="form.values" schema={get(values, ['form', 'schema'])} />
              <pre>
                {JSON.stringify(get(values, ['form', 'values']), null, 2)}
              </pre>
            </div>
          </div>
          </form>
        </div>)}
      </Formik>
    </div>
  )
}

export default App
