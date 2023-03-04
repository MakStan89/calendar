import Calendar from './components/calendar';
import UpcomingEvents from './components/upcoming-events';
import Modal from './components/modal';
import { useState } from 'react';
import './App.css';

function App() {
  const [isModal, setIsModal] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const closeModal = () => setIsModal(false);
  const openModal = () => {
    setIsModal(true);
    setShowInfo(false);
  };

  return (
    <div className="App">
      <UpcomingEvents
        openModal={openModal}
      />
      <Calendar
        openModal={openModal}
        showInfo={showInfo}
        setShowInfo={setShowInfo}
      />
      {
        isModal &&
        <Modal
          closeModal={closeModal}
        />
      }
    </div>
  );
}

export default App;
