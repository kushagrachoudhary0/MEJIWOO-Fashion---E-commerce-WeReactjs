import Head from './head/Head';
import Hero from './head/Hero';
import Cardlist from './Comp/Cardlist';
import Cardsalles from './Comp/Cardsalles';
import Hero2 from './Comp/Hero2';
import Main from './main/Main';
import About from './main/About';
import Foot from './main/Foot';
import P from './head/P';
import './App.css';
import Signup from './main/Signup';
import Collection from './Comp/Collection';
import Said from './Comp/Said';
import Vedio from './Comp/Vedio';

function App() {
  return (
    <div>
      <Head/>
      <Hero/>
      <P/>
      <Vedio/>
      <Cardlist/>
      <Cardsalles/>
      <Hero2/> 
      <Main/>
      <Collection/>
      <Said/>
      <Signup/>
      <About/>
      <Foot/>
     
    </div>
  );
}

export default App;