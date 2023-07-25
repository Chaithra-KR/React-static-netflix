import Banner from './component/Banner/Banner';
import Navbar from './component/Navbar/Navbar';
import RowPost from './component/RowPost/RowPost';
import {actions,originals} from './url';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Banner/>
     <RowPost url={originals} title='Netflix originals'/>
     <RowPost url={actions} title='Action' isSmall/>
    </div>
  );
}

export default App;
