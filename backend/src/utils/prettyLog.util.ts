import boxen from 'boxen'

type LogPrettier = {
  message: string;
  options?: {
    padding?: number;
    borderColor?: string;
  }
}

const prettyLog = ({ message, options: { padding = 1, borderColor = 'green' } }: LogPrettier) => {
  console.log(boxen(message, { padding, borderColor }))
}

export { prettyLog }
