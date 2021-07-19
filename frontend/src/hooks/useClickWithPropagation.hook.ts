import { MouseEvent } from 'react'

export const useClickWithPropagation = (
  event: MouseEvent<HTMLButtonElement>
) => {
  event?.stopPropagation()

  return (cb: void) => cb
}
