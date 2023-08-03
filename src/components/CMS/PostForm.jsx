import { useState } from "react";
// import { mediaApi } from "../../lib/axios";

export function PostForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [image, setImage] = useState(null);

  const [video, setVideo] = useState("");

  const [message, setMessage] = useState("");

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

  const createBody = async () => {
    console.log(image);
    const data = {
      title,
      description,
      image: await toBase64FromFile(image),
      video,
    };

    return data;
  };

  const sendRequest = async (e) => {
    e.preventDefault();
    const data = await createBody();

    // const response = await mediaApi.post("", await data);
    // setMessage(response.data.message);
    console.log(data);
    setMessage("Ready");
  };

  return (
    <>
      <form>
        <input
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          name="title"
          id="title"
          placeholder="Título da postagem"
        />
        <input
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          name="description"
          id="description"
          placeholder="Texto da postagem"
        />
        <input
          onChange={(e) => setImage(e.target.files[0])}
          type="file"
          name="image"
          id="image"
          placeholder="Imagem da postagem"
        />
        <input
          onChange={(e) => setVideo(e.target.value)}
          type="url"
          name="video"
          id="video"
          placeholder="URL do vídeo da postagem"
        />
      </form>
      <button id="send" onClick={sendRequest} type="submit">
        Enviar
      </button>
      {message.length ? <span>{{ message }}</span> : ""}
    </>
  );
}
