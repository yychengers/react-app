import styled from 'styled-components';
import StyledComponent from '../StyledComponent/index';
import IndexOnProps from '../StyledComponent/indexOnProps';

const StyledWrap = () => {
  return (
    <div>
      <div>the components contains styled componens</div>
      {/* 基本使用 */}
      <StyledComponent />

      {/* 基于props的使用方式 */}
      {/* <IndexOnProps /> */}

      {/* 样式扩展 */}
      {/* <ExtendingStyled /> */}

      {/* 样式化改造 */}
      {/* <StyleComponents /> */}

      {/* props传值 */}
      {/* <PassProps /> */}

      {/* 伪元素 伪选择器 */}
      {/* <SeudoElements /> */}

      {/* attrs覆盖 */}
      {/* <OverrideAttrs /> */}

      {/* 动画 */}
      {/* <Animate /> */}
    </div>
  );
};

export default StyledWrap;
