import { useState, useEffect } from 'react';

type useFirstDidMountProps = (callback: () => void, deps: any[]) => void 

export const useSkipFirstDidMount: useFirstDidMountProps = (callback, deps = []) => {
   const [firstMount, setFirstMount] = useState(true)

   useEffect(() => {
      setFirstMount(false)
      if(firstMount) return

      callback()
      
   }, deps)
}