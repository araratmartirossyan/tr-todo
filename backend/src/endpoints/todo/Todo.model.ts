import { model, Schema } from 'mongoose'
import { TodoEntity } from './Todo.types'

const schema = new Schema<TodoEntity>({
  title: {
    type: String,
    default: ''
  },
  done: {
    type: Boolean,
    default: false
  },
  description: {
    type: String,
    default: ''
  },
  dueDate: {
    type: Date,
    default: null
  }
})

export default model<TodoEntity>('Todo', schema)
