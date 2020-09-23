import React from 'react'
import ReactDOM from 'react-dom'

var style = {
  backgroundColor: 'orange',
  color: 'white',
  fontFamily: 'Arial'
}

// const title = react.createElement(
//   'ul',
//   { id: 'title', className: 'header', style: style },
//   react.createElement(
//     'li',
//     {},
//     'item on our list'
//   )
// )

ReactDOM.render(
  /* title */<div style={style}>
    <h1 id='heading-element'>Hello World!</h1>
    <p>I'm glad you're here!</p>
  </div>,
  document.getElementById('root')
)