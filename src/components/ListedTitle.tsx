interface IListedTitleProps {
  content: string
}

export const ListedTitle = ({ content }: IListedTitleProps) => {
  return (
    <div className='flex items-center'>
      <div className='flex items-center justify-center w-12 h-12 bg-blue-500 rounded-full'></div>
      <h2 className='ml-4 text-lg font-semibold'>{content}</h2>
    </div>
  )
}
