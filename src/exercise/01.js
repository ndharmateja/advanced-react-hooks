// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

const INCREMENT = 'INCREMENT'

function Counter({initialCount = 0, step = 1}) {
  const countReducer = (state, action) => {
    switch (action.type) {
      case INCREMENT:
        const out = {
          ...state,
          count: state.count + action.step,
        }
        return out
      default:
        return state
    }
  }

  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const {count} = state

  const increment = () => dispatch({type: INCREMENT, step})
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
