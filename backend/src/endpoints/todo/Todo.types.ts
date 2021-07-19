import { Request } from 'express'
import { Document } from 'mongoose'

// Model
export interface TodoEntity extends Document {
  title: string
  done: boolean
  dueDate: Date
  description: string
}

// Request response
export interface TodoGetRequestInput extends Request {
  params: {
    id: string
  }
}

export interface TodoUpdateRequestInput extends Request {
  body: TodoEntity
  params: {
    id: string
  }
}

export interface TodoDeleteRequestInput extends Request {
  params: {
    id: string
  }
}

export interface TodoCreateRequestInput extends Request {
  body: TodoEntity
}
