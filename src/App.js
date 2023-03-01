import Calendar from './components/calendar';
import UpcomingEvents from './components/upcoming-events';
import './App.css';

function App() {

  return (
    <div className="App">
      <UpcomingEvents />
      <Calendar />
    </div>
  );
}

export default App;
