import React from 'react'

export interface ModalHeaderProps {
   children: React.ReactNode
}

export const ModalHeader: React.FC<ModalHeaderProps> = ({ children }) => {

   return (
      <div className='modal__header'>
       {children}
      </div>
   )
}