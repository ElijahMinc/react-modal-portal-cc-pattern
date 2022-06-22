import React, { useEffect, useState } from 'react';
import './App.css';
import { Modal } from './Common/Modal/Modal';

function App() {

  const [showModal1, setShowModal1] = useState(false)


  useEffect(() => {
    

    return () => {
      console.log('unmount')
    }
  }, [])
  
  return (
      <div className="App">
        {showModal1 && (
          <Modal onClose={() => setShowModal1(false)}>
            <Modal.Header>
              <h1>Header</h1>
            </Modal.Header>
            <Modal.Body>Body</Modal.Body>
            <Modal.Footer>Footer</Modal.Footer>
          </Modal>
        )}
          <button onClick={() => setShowModal1(true)}>Show Modal1</button>
      </div>
  ) 
}

export default App;
