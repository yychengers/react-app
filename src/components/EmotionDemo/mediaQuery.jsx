/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

const styles = css`
  font-size: 30px;
  @media (min-width: 1000px) {
    font-size: 50px;
  }
`;

const MediaQuery = () => {
  return <p css={styles}>some media query text</p>;
};

export default MediaQuery;
