import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  createTask,
  deleteTask,
  fetchTasks,
  updateTask,
} from '@/services/tasks.service'

export const createTaskAction = createAsyncThunk(
  'task/createTask',
  async (payload: TODO.CreateTaskInput) => {
    const response = await createTask(payload)
    return response
  }
)

export const fetchTasksAction = createAsyncThunk('task/getTasks', async () => {
  const response = await fetchTasks()
  return response
})

export const updateTaskAction = createAsyncThunk(
  'task/updateTask',
  async (payload: TODO.UpdateTaskInput) => {
    const response = await updateTask(payload)
    return response
  }
)

export const deleteTaskAction = createAsyncThunk(
  'task/deleteTask',
  async (id: string) => {
    console.log('oN DELETE', id)
    await deleteTask(id)
    return id
  }
)
