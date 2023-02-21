import logo from './logo.svg';
import './App.css';
import Test from './components/Test';
import Demo1 from './components/Demo1';
import Demo2 from './components/Demo2';

import EmotionDemo from './components/EmotionDemo';

function App() {
  return (
    <div className='App'>
      {/* <Test /> */}
      <Demo1 />
      <Demo2 />
      <EmotionDemo />
    </div>
  );
}

export default App;
