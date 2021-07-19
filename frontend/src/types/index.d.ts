declare namespace TODO {
  // Api inputs, outputs
  interface CreateTaskInput {
    title: string
  }

  interface UpdateTaskInput {
    title: string
    done: boolean | undefined
    _id: string
  }

  interface FetchTasksResponse {
    data: Task[]
  }

  interface DefaultTasksResponse {
    data: Task
  }

  interface DeleteTaskResponse {
    data: {
      status: string
      message: string
    }
  }

  // Data Types
  interface Task {
    title: string
    done: boolean
    // dueDate: Date
    _id: string
  }

  // Shared functions attr
  interface UpdateArguments {
    title: string
    done: boolean
    _id: string
  }
}
