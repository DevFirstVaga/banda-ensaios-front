import * as S from "./styled";
export function FormInput({ label, placeholder, type, register }) {
  return (
    <>
      {label && <label>{label}</label>}
      <S.InputWrapper
        placeholder={placeholder}
        type={type}
        onChange={register.onChange}
        onBlur={register.onBlur}
        name={register.name}
        ref={register.ref}
      />
    </>
  );
}
