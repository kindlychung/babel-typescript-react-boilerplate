import React from 'react'
import { render } from 'react-dom'
import { App } from './App'
// import { ReactHeader } from './ReactHeader';

render(
    <App />,
    document.getElementById('app') as HTMLElement
)
