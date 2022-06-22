import React from 'react'

interface ModalFooterProps {
   children: React.ReactNode
}

export const ModalFooter: React.FC<ModalFooterProps> = ({children}) => {

   return (
      <div className='modal__footer'>
        {children}
      </div>
      )
}