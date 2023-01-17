import { Formik } from 'formik'
import {get} from 'lodash';
import { v4 as uuidv4 } from 'uuid';
import FormGenerator from './FormGenerator'
import FormSchema from './types/FormSchema'
import '../index.css';
import { MouseEvent, MouseEventHandler, useCallback, useState } from 'react';
import Header from './AppComponents/Header';


const fieldSchema: FormSchema = [
  {type: 'select', label: 'Type', name: 'type', options: [
    {label: 'Text', value: 'input'},
    {label: 'Tag', value: 'tag'},
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

  const [formID, setFromID] = useState()

  const [activeTab, setActiveTab] = useState('preview');

  const activateTab: MouseEventHandler<HTMLAnchorElement> = useCallback((e)=>{
    e.preventDefault();
    const tabToActivate = (e.target as any).getAttribute('href')?.replace('#', '') || 'json-schema';
    setActiveTab(tabToActivate);
  }, []);

  const saveFrom:MouseEventHandler<HTMLButtonElement>  = useCallback((e)=>{

    if( !formID ){
      setFromID(uuidv4())
    }

    console.log("Form ID", formID)

  }, [formID]);

  return (
    <>
    <Header SaveForm={saveFrom} FormID={formID} />
    <div className="container">
      <Formik onSubmit={console.log} initialValues={{}}>
        {({values, setFieldValue})=>(<div className="container">
          <form >
          <div className='row'>
            <div className='col'>
              <FormGenerator name="form" schema={schema} />
            </div>
            <div className='col'>
              <div className='sticky-top'>
                <ul className="nav nav-pills mb-3" role="tablist">
                  <li className="nav-item">
                    <a onClick={activateTab} className={`nav-link ${activeTab === 'preview' && 'active'}`} id="preview-tab" data-toggle="tab" href="#preview" role="tab" aria-controls="preview" aria-selected="false">Preview</a>
                  </li>
                  <li className="nav-item">
                    <a onClick={activateTab} className={`nav-link ${activeTab === 'json-schema' && 'active'}`} id="json-schema-tab" data-toggle="tab" href="#json-schema" role="tab" aria-controls="json-schema" aria-selected="true">JSON Schema</a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className={`tab-pane fade ${activeTab === 'json-schema' && `show active`}`} id="json-schema" role="tabpanel" aria-labelledby="json-schema-tab">
                  <textarea onChange={(e)=>{
                  try{
                  const schema = JSON.parse(e.target.value);
                  console.log(schema)
                  setFieldValue('form.schema', schema);
                  }catch(e){
                    console.error(e);
                  }
                }} className='form-control' rows={8} value={JSON.stringify(get(values, ['form', 'schema']), null, 2)} />
                  </div>
                  <div className={`tab-pane fade ${activeTab === 'preview' && `show active`}`} id="preview" role="tabpanel" aria-labelledby="preview-tab">
                    <FormGenerator name="form.values" schema={get(values, ['form', 'schema'])} />
                  </div>
                </div>
              <pre>
                {JSON.stringify(get(values, ['form', 'values']), null, 2)}
              </pre>
              </div>
            </div>
          </div>
          </form>
        </div>)}
      </Formik>
    </div>
    </>
  )
}

export default App
