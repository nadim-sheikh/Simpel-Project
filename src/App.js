import './App.css';
import AssignmentMark from './components/AssignmentMark/AssignmentMark';
import Nav from './components/Nav/Nav';
import Pricing from './components/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Pricing></Pricing>
      <AssignmentMark></AssignmentMark>
    </div>
  );
}

export default App;
