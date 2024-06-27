import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './components/board';
import Modal from './components/modal';

function App() {
  const [showModal, setShowModal] = useState(false);
  
  return <>
  <Modal showModal={showModal} setShowModal={setShowModal}/>
  <Board setShowModal={setShowModal}/>
  </>;
}

export default App;
