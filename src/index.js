import React from 'react';
import ReactDOM from 'react-dom';  // do I need this?
import { BrowserRouter } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import Page from './App';
import theme from './theme';




ReactDOM.render(
    <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <BrowserRouter>
            <Page />
        </BrowserRouter>
    </ThemeProvider>,
    document.querySelector('#root'),
);

// Why ReactDOM.render and not just render as below...?

//render((
//    <BrowserRouter>
//        <App />
//    </BrowserRouter>
//), document.getElementById('root'));