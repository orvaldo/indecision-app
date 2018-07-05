import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import {injectGlobal} from 'styled-components';

injectGlobal([
    `
    html {
        font-size: 62.5%;
    }
    body {
        font-family: Helvetica, Arial, sans-serif;
        font-size: 1.6rem;
    }
`,
]);

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
