
import './App.css';
import Component from './Filter/Component';
import Dishes from './Dishes/Dishes';
import Cart from './Cart/Cart';

function App() {
  return (
    <div className="app">
      <div className="container">
<Component/>
<Cart/>
      </div>
      <div className="container">
        <Dishes/>
      </div>
    </div>
  );
}

export default App;
