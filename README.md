# dumbugger

> Full-stack javascript debugger for smart people. 👻 
> 
> Dumbugger opens your browser tab with google query with error stack info everytime when your code throws exceptions.

<img src="https://dl.dropboxusercontent.com/u/100463011/dumbugger-demo.gif" width="600" />

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

