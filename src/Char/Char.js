/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";

const char = (props) => {
  return (
    <div css={styles} onClick={props.clicked}>
      <p>{props.character}</p>
    </div>
  );
};

const styles = css`
  display: inline-block;
  padding: 16px;
  text-align: center;
  margin: 16px;
  border: 1px solid red;
  cursor: pointer;
`;

export default char;
