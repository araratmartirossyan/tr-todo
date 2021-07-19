import axiosFn from './axios.service'

export const createTask = async (payload: TODO.CreateTaskInput) => {
  try {
    const response = await axiosFn<TODO.DefaultTasksResponse>({
      method: 'post',
      url: 'tasks',
      data: payload,
    })
    return response.data
  } catch (err) {
    throw err
  }
}

export const fetchTasks = async () => {
  try {
    const response = await axiosFn<TODO.FetchTasksResponse>({
      method: 'get',
      url: 'tasks',
    })
    return response.data
  } catch (err) {
    throw err
  }
}

export const updateTask = async (payload: TODO.UpdateTaskInput) => {
  try {
    const response = await axiosFn<TODO.DefaultTasksResponse>({
      method: 'put',
      url: `tasks/${payload._id}`,
      data: payload,
    })
    return response.data
  } catch (err) {
    throw err
  }
}

export const deleteTask = async (id: string) => {
  try {
    const response = await axiosFn<TODO.DeleteTaskResponse>({
      method: 'delete',
      url: `tasks/${id}`,
    })
    return response.data
  } catch (err) {
    throw err
  }
}
