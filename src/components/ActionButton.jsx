import React from 'react'

export const ActionButton = ({text, link, disabled}) => {
  return (
    <div className='flex flex-col items-center gap-3'>
      <button className="bg-primary text-white font-bold py-2 px-4 rounded-full" href={link}>{text}</button>
      {disabled && <span className='center color-accent text-xs'>Próximamente</span>}
    </div>
  )
}
