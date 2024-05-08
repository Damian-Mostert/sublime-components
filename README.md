# smart-components

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/smart-components.svg)](https://www.npmjs.com/package/smart-components) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save smart-components
```

## Usage

### Popup Component

This component provides a flexible way to manage popups and modals in React applications.

##### Usage

```javascript
import React from 'react';
import { Popup } from './Popup';

function App() {
  const openPopup = async () => {
    await Popup.fire({
      // Specify the content of the popup
      content: 'Hello, this is a popup!',
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
import { Button } from './Button';

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
types : default, split, split-right, split-left
```javascript
import React from 'react';
import { Layout } from './Layout';

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
import { Input } from './Input';

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
# License

MIT © [Damian-Mostert](https://github.com/Damian-Mostert)
