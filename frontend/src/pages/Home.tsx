import { useSelector } from 'react-redux'
import { FormEvent, KeyboardEvent, useEffect, useState } from 'react'

// Components
import { Page } from '@/components/layout/page'
import { Button, StyledInput, TodoItem, TodoList } from '@/components'

// Styles
import { Section } from './styles'

// Stores
import { useAppDispatch } from '@/store'
import { getTasks } from '@/store/tasks/store'
import {
  createTaskAction,
  deleteTaskAction,
  fetchTasksAction,
  updateTaskAction,
} from '@/store/tasks/thunks'

export const Home = () => {
  // Task
  const [task, setTask] = useState('')

  const onTaskInput = ({
    currentTarget: { value },
  }: FormEvent<HTMLInputElement>) => setTask(value)

  const handleCreateTask = () => {
    dispatch(createTaskAction({ title: task }))
    setTask('')
  }

  const handlePressKey = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      event.stopPropagation()
      handleCreateTask()
    }
  }

  // Stores
  const tasks = useSelector(getTasks)
  const dispatch = useAppDispatch()

  // Lifecycle
  useEffect(() => {
    dispatch(fetchTasksAction())
  }, [dispatch])

  return (
    <div className="home-page">
      <Page>
        {tasks.length === 0 && (
          <Section>
            <h2 className="home-page-empty">
              You have nothing to do. Create new task or take a rest
            </h2>
          </Section>
        )}
        <Section>
          <TodoList>
            {tasks.map((item, key) => (
              <TodoItem
                key={key}
                onUpdate={(payload) => dispatch(updateTaskAction(payload))}
                onRemove={(_id) => dispatch(deleteTaskAction(_id))}
                {...item}
              />
            ))}
          </TodoList>
        </Section>
        <Section>
          <StyledInput
            placeholder="Add task"
            className="task-input"
            value={task}
            onKeyDown={handlePressKey}
            onInput={onTaskInput}
          />
          <Button primary onClick={handleCreateTask} type="submit">
            Add
          </Button>
        </Section>
      </Page>
    </div>
  )
}
