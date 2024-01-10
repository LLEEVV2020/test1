import { ADD_TODO } from './types'

export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO: {
      const item = action.payload
      return [...state, item]
    }
    default:
      return state
  }
}
