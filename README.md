# dumbugger

> Full-stack javascript debugger for smart people. 👻 
> 
> Dumbugger opens your browser tab with google query with error stack info everytime when your code throws exception.

<img src="https://user-images.githubusercontent.com/974035/36945880-a844411e-1fb4-11e8-9816-ee80e1222ea2.gif" width="600" />

## Install

```bash
npm install dumbugger --save
```

## Usage

Include _dumbugger_ script before any of your application code.

### Node.js

```js
require('dumbugger/server'); // for server side
```

or

```js
require('dumbugger/browser'); // for npm powered bundles
```

### Browser

```html
<script src="path/to/dumbugger/browser.js"></script>
```

---

**MIT Licensed**

