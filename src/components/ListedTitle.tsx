import { HTMLAttributes } from 'react'

interface IListedTitleProps extends HTMLAttributes<HTMLElement> {
  content: string
}

export const ListedTitle = ({ content, className = 'text-lg' }: IListedTitleProps) => {
  return (
    <div className='flex items-center'>
      <div className='flex items-center justify-center w-12 h-12 bg-blue-500 rounded-full'></div>
      <h3 className={`ml-4 font-semibold ${className}`}>{content}</h3>
    </div>
  )
}
