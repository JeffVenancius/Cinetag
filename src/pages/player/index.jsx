import { useParams } from "react-router-dom";
import playerStyle from "./player.module.css";

import { useVideosContext } from "contexts/videosProvider";

import NotFound from "pages/notFound";
import Banner from "components/banner";
import Title from "components/title";

const Player = () => {
  const videos = useVideosContext();
  const id = Number(useParams().id);
  const { title, link = "not found" } = videos.find((video) => video.id === id);

  ///////////// for async purposes /////
  // if (link === "await for video") {
  //   return (
  //     <>
  //       <Banner img="player" />
  //       <Title>
  //         <h1>Buscando vídeo...</h1>
  //       </Title>
  //     </>
  //   );

  if (link === "not found") {
    return (
      <>
        <Banner img="player" />
        <NotFound msg="Vídeo não encontrado" />
      </>
    );
  }

  return (
    <>
      <Banner img="player" />
      <Title>
        <h1>{title}</h1>
      </Title>
      <section>
        <iframe
          className={playerStyle.videoframe}
          src={link}
          title={title}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </section>
    </>
  );
};

export default Player;
