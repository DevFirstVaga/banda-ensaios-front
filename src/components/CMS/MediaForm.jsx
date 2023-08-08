import { useForm } from "react-hook-form";
import { mediaApi } from "../../lib/axios";
import * as S from "./styled";
import { FormInput } from "./FormInput";
import { FormButton } from "./FormButton";

export function MediaForm() {
  const { register, handleSubmit } = useForm();

  const toBase64FromFile = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onload = () => {
        resolve(reader.result);
      };

      reader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const createBody = async (data) => {
    const { image, video } = data;
    return {
      image: await toBase64FromFile(image[0]),
      video,
    };
  };

  const setMessage = (message) => {
    return <span>{message}</span>;
  };

  const sendRequest = async (data) => {
    const body = await createBody(data);
    const response = await mediaApi.createMedia(body);
    if (response.data) {
      console.log(data);
      alert("Dados criados");
    }
  };

  return (
    <S.FormWrapper onSubmit={handleSubmit(sendRequest)}>
      <FormInput
        type="file"
        id="image"
        placeholder="Imagem da postagem"
        register={register("image")}
      />
      <FormInput
        type="url"
        id="video"
        placeholder="URL do vídeo"
        register={register("video")}
      />
      <FormButton id="send" type="submit" content="Enviar"></FormButton>
      {setMessage}
    </S.FormWrapper>
  );
}
