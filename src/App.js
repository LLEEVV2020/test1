import { useDispatch } from 'react-redux'

import { addTodoAction } from './actions'

function App() {
  const dispatch = useDispatch()

  const handleTodoAdd = () => {
    dispatch(addTodoAction)
  }

  return (
    <button type="button" onClick={handleTodoAdd}>
      Добавить todo
    </button>
  )
}

export default App
