import NavBar from './components/NavBar';
import NewThisWeek from './components/NewThisWeek';
import TopSellers from './components/TopSellers';
import './App.css';

const App = () => (
  <div className='app-cont'>
    <NavBar />
    <NewThisWeek />
    <TopSellers />
  </div>
)

export default App;
