import { Request, Response } from 'express'
import boom from '@hapi/boom'

import Todo from './Todo.model'

// Types
import {
  TodoGetRequestInput,
  TodoCreateRequestInput,
  TodoUpdateRequestInput,
  TodoDeleteRequestInput
} from './Todo.types'

export const get = async ({ params: { id } }: TodoGetRequestInput, res: Response) => {
  try {
    const item = await Todo.findById(id)
    return res.status(200).send(item)
  } catch (err) {
    return res.status(400).send(boom.boomify(err))
  }
}

export const getAll = async (_: Request, res: Response) => {
  try {
    const items = await Todo.find()
    return res.status(200).send(items)
  } catch (err) {
    return res.status(400).send(boom.boomify(err))
  }
}

export const create = async ({ body }: TodoCreateRequestInput, res: Response) => {
  try {
    const item = new Todo(body)
    const newItem = await item.save()
    return res.status(200).send(newItem)
  } catch (err) {
    return res.status(400).send(boom.boomify(err))
  }
}

export const update = async ({ params: { id }, body }: TodoUpdateRequestInput, res: Response) => {
  try {
    const item = await Todo.findByIdAndUpdate(id, body, { new: true })
    return res.status(200).send(item)
  } catch (err) {
    return res.status(400).send(boom.boomify(err))
  }
}

export const deleteItem = async ({ params: { id } }: TodoDeleteRequestInput, res: Response) => {
  try {
    await Todo.findByIdAndDelete(id)
    return res.status(200).send({ status: 'OK', message: 'Todo removed' })
  } catch (err) {
    return res.status(400).send(boom.boomify(err))
  }
}
