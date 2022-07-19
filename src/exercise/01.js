// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

const INCREMENT = 'INCREMENT'

function Counter({initialCount = 0, step = 1}) {
  const init = initialCount => ({
    count: initialCount,
  })

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

  const [state, dispatch] = React.useReducer(countReducer, initialCount, init)
  const {count} = state

  const increment = () => dispatch({type: INCREMENT, step})
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
