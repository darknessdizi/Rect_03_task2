import './App.css';
import { Listing } from './components/Listing/Listing';
import { data } from './constant/const'; 

function App() {
  return (
    <>
      <Listing items={data}/>
    </>
  )
}

export default App
