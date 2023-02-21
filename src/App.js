
import './App.css';
import Avtorization from './components/registration/Avtorization';
import PasswordModal from './UI/PasswordModal';
import RegisModal from './UI/RegisModal';

function App() {
  return (
    <div className="App">
        <Avtorization/>

        <RegisModal/>
        <PasswordModal/>
        
    </div>
  );
}

export default App;
