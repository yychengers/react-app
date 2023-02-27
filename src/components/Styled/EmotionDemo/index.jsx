/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import MediaQuery from './mediaQuery';

const styles = css`
  color: hotpink;
`;
const SomeComponent = ({ children }) => {
  return (
    <div css={styles}>
      几个文字。。。
      {children}
    </div>
  );
};

const AnotherStyles = css({
  textDecoration: 'underline',
});
const AnotherComponent = () => {
  return <div css={AnotherStyles}>一些文字，带下划线</div>;
};

const BaseColor = 'yellow';
const Button = styled.button`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`;
const EmotionDemo = () => {
  return (
    <>
      <div
        css={css`
          padding: 32px;
          background-color: hotpink;
          font-size: 24px;
          border-radius: 4px;
          &:hover {
            color: ${BaseColor};
          }
        `}
      >
        hover me...
        <Button>this is my button...</Button>
      </div>

      <SomeComponent>
        <AnotherComponent></AnotherComponent>
      </SomeComponent>
      <MediaQuery></MediaQuery>
    </>
  );
};

export default EmotionDemo;
