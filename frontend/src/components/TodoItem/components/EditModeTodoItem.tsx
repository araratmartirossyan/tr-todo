import { FC, FormEvent, useState, useRef, useEffect } from 'react'

// Components
import SaveIcon from '@/assets/icons/save.svg?component'
import { Button, StyledInput } from '@/components'

import { StyledTodoItem, ActionsBlock } from '../styles'

interface EditModeProps {
  onSetEditMode: (editMode: boolean) => void
  onUpdate: (args: TODO.UpdateArguments) => void
  _id: string
  title: string
  done: boolean
}

export const EditModeTodoItem: FC<EditModeProps> = ({
  onUpdate,
  onSetEditMode,
  _id,
  title,
  done,
}) => {
  const [localTaskTitle, setLocalTaskTitle] = useState('')

  const inputRef =
    useRef<HTMLInputElement>() as React.MutableRefObject<HTMLInputElement>

  useEffect(() => {
    setLocalTaskTitle(title)
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [inputRef])

  const onTaskInput = ({
    currentTarget: { value },
  }: FormEvent<HTMLInputElement>) => setLocalTaskTitle(value)

  const handleUpdate = () => {
    onSetEditMode(false)
    onUpdate({ title: localTaskTitle, _id, done })
  }

  return (
    <StyledTodoItem>
      <StyledInput
        className="todo-edit-input"
        onInput={onTaskInput}
        value={localTaskTitle}
        ref={inputRef}
      />

      <ActionsBlock>
        <Button tertiary className="todo-icon-button" onClick={handleUpdate}>
          <SaveIcon />
        </Button>
      </ActionsBlock>
    </StyledTodoItem>
  )
}
