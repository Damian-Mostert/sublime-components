[![NPM](https://img.shields.io/npm/v/smart-components.svg)](https://www.npmjs.com/package/smart-components) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

### part of [react-sublime](https://www.github.com/Damian-Mostert/react-sublime)

## Install

```bash
npm install sublime-components sublime-styles
```

## Usage

### Popup Component

This component provides a flexible way to manage popups and modals in React applications.

##### Usage

```javascript
import React from 'react';
import { Popup } from 'sublime-components';

function App() {
  const openPopup = async () => {
    await Popup.fire({
      // Specify the content of the popup
      //...textComponentConfig
      // Optionally provide additional configuration
      // bg: 'dark', // Specify background style
      // canClose: true, // Enable closing the popup by clicking outside
      // form: { /* Form configuration */ }, // Render a form inside the popup
      // modal: YourCustomModalComponent, // Render a custom modal component
    });
  };

  const closePopup = async () => {
    await Popup.close();
  };

  return (
    <div>
      <button onClick={openPopup}>Open Popup</button>
      <button onClick={closePopup}>Close Popup</button>
      <Popup />
    </div>
  );
}

export default App;
```

### Button Component

This component renders a button or a link with customizable properties.

#### Usage

```javascript
import React from 'react';
import { Button } from 'sublime-components';

function MyComponent() {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div>
      <Button label="Click me" onClick={handleClick} />
      <Button label="Visit website" variant="primary" href="https://example.com" />
    </div>
  );
}

export default MyComponent;
```
### Layout Component

This component renders a layout with flexible configurations.

#### Usage
types : default, center, split, split-right, split-left
```javascript
import React from 'react';
import { Layout } from 'sublime-components';

function MyComponent() {
  return (
    <Layout type="split-right" variant="dark">
      <div>Content 1</div>
      <div>Content 2</div>
    </Layout>
  );
}

export default MyComponent;
```

### Input Component

This component provides various input fields with validation support.

#### Usage

```javascript
import React from 'react';
import { Input } from 'sublime-components';

function MyForm() {
  const handleChange = (value) => {
    console.log('Input value changed:', value);
  };

  return (
    <div>
      <Input type="text" label="Name" onChange={handleChange} />
      <Input type="email" label="Email" onChange={handleChange} />
      <Input type="password" label="Password" onChange={handleChange} />
      <Input type="date" label="Date" onChange={handleChange} />
      <Input type="boolean" label="Agree to terms" onChange={handleChange} />
      {/* Add more input fields as needed */}
    </div>
  );
}

export default MyForm;
```

### Form Component

This component provides a customizable form with input fields and submission handling.

#### Usage

```javascript
import React from 'react';
import { Form } from 'sublime-components';

function MyForm() {
  const handleSubmit = async (formData) => {
    // Handle form submission
    console.log('Form submitted with data:', formData);
    // Example: Call API to submit form data
    // const response = await submitFormData(formData);
    // return response.success;
  };

  const formFields = [
    { name: 'username', label: 'Username', type: 'text', require: true },
    { name: 'email', label: 'Email', type: 'email', require: true },
    { name: 'password', label: 'Password', type: 'password', require: true },
  ];

  const buttonText = 'Submit';

  return (
    <Form
      fields={formFields}
      button={{ label: buttonText, variant: 'primary' }}
      onSubmit={handleSubmit}
      submittedText={{ content: 'Form submitted successfully!' }}
    />
  );
}

export default MyForm;
```

### List Component

This component renders a list of items with customizable styles and navigation indicators.

#### Usage

```javascript
import React from 'react';
import { List } from 'sublime-components';

function MyList() {
  const itemList = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <List
      list={itemList}
      variant="default"
      className=""
      dots={true}
      arrows={false}
      align="left"
    />
  );
}

export default MyList;
```
### Text Component

This component displays text content with optional icon, title, paragraphs, and list.

#### Usage

```javascript
import React from 'react';
import { Text } from 'sublime-components';

function MyText() {
  const paragraphs = [
    'Paragraph 1',
    'Paragraph 2',
    'Paragraph 3'
  ];

  const listItems = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <Text
      icon="exampleIcon"
      title={{ content: 'Example Title', variant: 'h2' }}
      pre="Pre-text"
      text="Main text content"
      extra="Extra text content"
      paragraphs={paragraphs}
      variant="default"
      align="center"
      className=""
      list={listItems}
    />
  );
}

export default MyText;
```
### Text Component

This component displays text content with optional icon, title, paragraphs, and list.

#### Usage

```javascript
import React from 'react';
import { Text } from 'sublime-components';

function MyText() {
  const paragraphs = [
    'Paragraph 1',
    'Paragraph 2',
    'Paragraph 3'
  ];

  const listItems = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <Text
      icon="exampleIcon"
      title={{ content: 'Example Title', variant: 'h2' }}
      pre="Pre-text"
      text="Main text content"
      extra="Extra text content"
      paragraphs={paragraphs}
      variant="default"
      align="center"
      className=""
      list={listItems}
    />
  );
}

export default MyText;
```
# License

MIT © [Damian-Mostert](https://github.com/Damian-Mostert)
