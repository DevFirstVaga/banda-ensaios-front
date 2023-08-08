import * as S from "./styled";

export function FormButton({ type, content }) {
  return <S.ButtonWrapper type={type}>{content}</S.ButtonWrapper>;
}
