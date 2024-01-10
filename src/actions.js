import { ADD_TODO } from './types'

export const addTodoAction = {
  type: ADD_TODO,
  payload: {
    id: 1,
    text: 'Изучить Redux',
    done: false,
  },
}
