import logo from './logo.svg';
import './App.css';

import JSSButton from './components/JssButton';
import JssButtonDynamic from './components/JssButton/dynamicValues';
import JssButtonPrefix from './components/JssButton/prefixClassName';

import StyledWrap from './components/StyledWrap';
// import Demo1 from './components/Demo1';
// import Demo2 from './components/Demo2';

import EmotionDemo from './components/EmotionDemo';

function App() {
  return (
    <div className='App'>
      {/* <Test /> */}
      {/* <EmotionDemo /> */}

      {/* 1. JSS */}
      {/* <JSSButton>abc</JSSButton> */}
      {/* 2. JSS 动态值 */}
      {/* <JssButtonDynamic>哈哈哈</JssButtonDynamic> */}
      {/* 3, 前置 className 配置 */}
      {/* <JssButtonPrefix>哎呦</JssButtonPrefix> */}

      {/* 4. styled-components 案例 */}
      {/* <StyledWrap /> */}

      {/* 5. Emotion 案例 */}
      <EmotionDemo></EmotionDemo>
    </div>
  );
}

export default App;
