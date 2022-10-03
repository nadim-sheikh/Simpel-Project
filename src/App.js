import './App.css';
import AssignmentMark from './components/AssignmentMark/AssignmentMark';
import Nav from './components/Nav/Nav';
import PhoneBar from './components/PhoneBar/PhoneBar';
import Pricing from './components/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Pricing></Pricing>
      <AssignmentMark></AssignmentMark>
      <PhoneBar></PhoneBar>
    </div>
  );
}

export default App;
