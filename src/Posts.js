import { MdMusicOff } from "react-icons/md";

export const Posts = () => {
  return (
    <button
      onClick={() => {
        console.log("obteniento datos");
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then((response) => response.json())
          .then((data) => console.log(data))
          .catch((error) => console.error(error));
      }}
    >
      <MdMusicOff /> Obtener datos
    </button>
  );
};
