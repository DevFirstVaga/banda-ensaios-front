import styled, { css } from "styled-components";

export const FormWrapper = styled.form`
  ${() => css`
    & {
      position: relative;
      background-color: #557;
      display: flex;
      flex: 0 0 1;
      flex-flow: row wrap;

      width: 100%;
      max-height: 200px;

      border: 1px solid #eaeaea;
      border-radius: 8px;
      box-shadow: 2px 5px 5px #555;
    }

    & * {
      color: #ddf;
    }

    span {
      background-color: #fbb;
      width: 100%;
      border: 1px solid #f22;
      border-radius: 8px;
      padding: 10px 20px;
      color: #f22;
      text-align: center;
    }
  `}
`;

export const InputWrapper = styled.input`
  ${() => css`
    & {
      position: relative;
      padding: 10px 20px;
      outline: none;
      min-width: 150px;
      max-width: 100%;
    }

    label {
      position: absolute;
      top: -5px;
    }
  `}
`;

export const ButtonWrapper = styled.button`
  ${({ borderColor }) => css`
    & {
      background-color: #afa;
      color: #080808;
      padding: 10px 20px;
      border-radius: 8px;
      border: 1px solid ${borderColor};
    }
  `}
`;
