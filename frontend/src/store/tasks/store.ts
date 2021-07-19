import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../index'
import {
  createTaskAction,
  deleteTaskAction,
  fetchTasksAction,
  updateTaskAction,
} from './thunks'

interface TasksStore {
  tasks: TODO.Task[]
}

export const taskSlice = createSlice({
  name: 'task',
  initialState: {
    tasks: [],
  } as TasksStore,
  extraReducers: (builder) => {
    builder.addCase(fetchTasksAction.fulfilled, (state, { payload }) => {
      state.tasks = payload
    })

    builder.addCase(createTaskAction.fulfilled, (state, { payload }) => {
      state.tasks = [...state.tasks, payload]
    })

    builder.addCase(updateTaskAction.fulfilled, (state, { payload }) => {
      const taskIndex = state.tasks.findIndex(
        (task) => task._id === payload._id
      )
      state.tasks[taskIndex] = {
        ...payload,
      }
    })

    builder.addCase(deleteTaskAction.fulfilled, (state, { payload }) => {
      const filteredTasks = state.tasks.filter((task) => task._id !== payload)
      state.tasks = [...filteredTasks]
    })
  },
  reducers: {},
})

export const getTasks = (state: RootState) => state.taskSlice.tasks

export default taskSlice.reducer
