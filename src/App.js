import { BrowserRouter , Routes,Route} from 'react-router-dom';
import './App.css';
import Forms from './components/Forms/Forms';
import GeneralForm from './components/Forms/GeneralForm';
import PersonalForm from './components/Forms/PersonalForm';
import UserItem from './components/UserItem';
import { UserPage } from './components/UserPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' exact element={<UserItem/>}></Route>
      <Route path='/forms' element={<Forms/>}></Route>
      <Route path='/details' element={<UserPage/>}></Route>
      <Route path="/forms/general" exact={false} element={<GeneralForm />}></Route>
      <Route path="/forms/personal" exact={false} element={<PersonalForm />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
