import React from 'react'

interface ModalBodyProps {
   children: React.ReactNode

}

export const ModalBody: React.FC<ModalBodyProps> = ({ children }) => {

   return (
      <div className='modal__body'>
         {children}
      </div>
      )
}