<h1>@evlop/react-form</h1>

<p>This project provides a form builder for React that allows you to convert a JSON schema into a form. The form builder uses the JSON schema to automatically generate form fields and validation rules, making it easy to create forms with minimal code.</p>

<h2>Installation</h2>

<p>To use the form builder in your React project, you'll need to install it as a dependency:</p>

```npm install @evlop/react-form```

<h2>Usage</h2>

<p>To use the form builder, you'll first need to create a JSON schema that defines the fields and validation rules for your form. Once you have your schema, you can use the <code>FormBuilder</code> component to convert it into a form:</p>

```
import React from 'react';
import FormBuilder from '@evlop/react-form';

const schema = {
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      required: true
    },
    {
      name: 'age',
      label: 'Age',
      type: 'number',
      required: true
    }
  ]
};

function MyForm() {
  return (
    <FormBuilder schema={schema} />
  );
}

export default MyForm;
```

<p>You can also pass a <code>handleSubmit</code> function to the <code>FormBuilder</code> component, which will be called when the form is submitted:</p>

```
function handleSubmit(values) {
  console.log(values);
}

function MyForm() {
  return (
    <FormBuilder schema={schema} handleSubmit={handleSubmit} />
  );
}
```

<h2>Customizing the Form</h2>

<p>The form builder uses the <code>fields</code> array in the JSON schema to generate form fields. Each field object in the array should have the following properties:</p>

<ul>
<li><code>name</code>: The name of the field.</li>
<li><code>label</code>: The label for the field.</li>
<li><code>type</code>: The type of the field. Supported types are "text", "email", "number", "password", "checkbox", "radio", "select", "textarea"</li>
<li><code>required</code>: Whether the field is required.</li>
</ul>

<p>You can also pass custom <code>props</code> and <code>validations</code> to the form fields.</p>

<h2>Validation</h2>

<p>The form builder uses the validation rules specified in the JSON schema to validate the form fields. By default, it supports the following validation rules:</p>

<ul>
<li><code>required</code>: The field is required.</li>
<li><code>minLength</code>: The field must have at least a certain number of characters.</li>
<li><code>maxLength</code>: The field must have at most a certain number of characters.</li>
<li><code>pattern</code>: The field must match a certain regular expression.</li>
</ul>

<p>You can also pass custom validation functions to the form fields.</p>

<h2>Customizing the Error Messages</h2>

<p>You can customize the error messages that are displayed when validation fails by passing a <code>messages</code> object to the <code>FormBuilder</code> component. The <code>messages</code> object should have the same structure as the schema, with a <code>messages</code> property for each field that has validation rules.</p>

```
const messages = {
  name: {
    required: "Name is required"
  }
};

function MyForm() {
  return (
    <FormBuilder schema={schema} messages={messages} />
  );
}
```

