import { useDispatch } from 'react-redux'

import { ADD_TODO } from './types'

function App() {
  console.log(ADD_TODO)
  const dispatch = useDispatch()

  const handleTodoAdd = () => {
    dispatch({
      type: ADD_TODO,
      payload: {
        id: 1,
        text: 'Изучить Redux',
        done: false,
      },
    })
  }

  return (
    <button type="button" onClick={handleTodoAdd}>
      Добавить todo
    </button>
  )
}

export default App
