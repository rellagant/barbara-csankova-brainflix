import './App.scss';
import './styles/partials/_globals.scss'
import { Avatar } from './components/Component/Avatar.jsx'
import AvatarImage from './assets/images/Mohan-muruge.jpg'


function App() {
  return (
    <>
    "HI JOSEPH, do you have a technicolor dreamcoat?"
    <Avatar src={AvatarImage} alt="User Avatar" /> 
    <Avatar/>
    </>
  );
}

export default App;
