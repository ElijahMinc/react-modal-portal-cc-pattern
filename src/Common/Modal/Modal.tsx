import React, { MouseEvent, ReactPortal, useEffect, useLayoutEffect, useRef, useState,  } from 'react'
import { createPortal } from 'react-dom'
import { Nullable } from '../../types/reset';
import { ModalProvider } from './Context/ModalContext';

import { ModalBody } from './ModalBody/ModalBody';
import { ModalFooter } from './ModalFooter/ModalFooter';
import { ModalHeader } from './ModalHeader/ModalHeader';

import './Modal.css';

interface ModalProps{
   onClose: () => void
   children: React.ReactNode
}

type ModalProviderType = ({ onClose, children }: ModalProps) => ReactPortal | null

interface CompountComponentProps {
   Header: typeof ModalHeader
   Body: typeof ModalBody
   Footer: typeof ModalFooter
}

enum ModalAttrEnum {
   ID = 'modal-wrapper',
   OVERLAY_MASK_CLASS_BODY = 'overlay-mask',
   MODAL_CONTAINER_ATTR = '[data-modal-container]',
   MODAL_ANIMATED_CLASS = 'animated'
}

// React. & CompountComponentProps
export const Modal: ModalProviderType & CompountComponentProps  = ({ onClose, children }: ModalProps): Nullable<ReactPortal> => {
   const overlayMaskNode = useRef<Nullable<HTMLDivElement>>(null);
   const [isPortalTargetReady , setIsPortalTargetReady] = useState(false)
   const [isAnimated , setAnimated] = useState(false)

   const handleClose = (e: MouseEvent ) => {
      e.stopPropagation()
      e.preventDefault()

      const target = e.target as HTMLElement

      if(
      target.matches(ModalAttrEnum.MODAL_CONTAINER_ATTR) 
      || 
      target.closest(ModalAttrEnum.MODAL_CONTAINER_ATTR)
      ) return

      onClose()
   }

   useLayoutEffect(() => {
      // add overflow: hidden into body tag
      document.body.classList.add(ModalAttrEnum.OVERLAY_MASK_CLASS_BODY);

      return () => {
         document.body.classList.remove(ModalAttrEnum.OVERLAY_MASK_CLASS_BODY);
       };
   }, [])


   useLayoutEffect(() => {
      if (!!document) {
         const wrapperElement = document.createElement('div');
         wrapperElement.setAttribute('id', ModalAttrEnum.ID)
         overlayMaskNode.current = wrapperElement;
      }
    }, []);

    
    useLayoutEffect(() => {
   // console.log('isPortalTargetReady INSIDEE', isPortalTargetReady)

      const portalTarget = overlayMaskNode.current;

      if (portalTarget) {
         document.body.appendChild(portalTarget);
      }

      setIsPortalTargetReady(true)

      setTimeout(() => {
         setAnimated(true)
      }, 200)

      return () => {
         if (portalTarget) {            
            document.body.removeChild(portalTarget);
         }
      };
   }, []);

   const modalContainerClasses = `modal-container ${isAnimated ? 'animated' : ''}`

   return isPortalTargetReady ? createPortal(
      <ModalProvider.Provider value={null}>
         <div className='modal' onClick={handleClose}>
            <div className={modalContainerClasses} data-modal-container>
               {children}
               <div className='modal__close' onClick={onClose}>X</div>
            </div>
         </div>
      </ModalProvider.Provider>
   ,
   overlayMaskNode.current!
   ) : null

}

Modal.Header = ModalHeader
Modal.Body = ModalBody
Modal.Footer = ModalFooter