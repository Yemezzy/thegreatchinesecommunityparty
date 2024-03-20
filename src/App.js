
import './App.css';
import Chinese from './Dextool/Chinese';
import Detials from './Dextool/Detials';
import Listing from './Dextool/Listing';
import Update from './Dextool/Update';


function App() {
  return (
    // <div>
    //   <Chinese/>
    // </div>
    <div className=" text-white h-screen">
      <Listing />
      <Detials />
 {/* <Update/> */}
    </div>
  );
}

export default App;
