import NavBar from './components/NavBar';
import NewThisWeek from './components/NewThisWeek';
import TopSellers from './components/TopSellers';
import FilterCards from './components/FilterCards';
import './App.css';

const App = () => (
  <div className='app-cont'>
    <NavBar />
    <NewThisWeek />
    <FilterCards/>
    <TopSellers />
  </div>
)

export default App;
