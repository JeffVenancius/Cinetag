import { useFavoriteContext } from "contexts/favoritesProvider";
import { useVideosContext } from "contexts/videosProvider";

import Banner from "components/banner";
import Title from "components/title";
import Card from "components/card";

import homeStyle from "pages/home/home.module.css";

const Favorites = () => {
  const { favorites } = useFavoriteContext();
  const videos = useVideosContext();

  let cardsToRender = videos.filter((video) =>
    favorites.current.includes(video.id)
  );

  return (
    <>
      <Banner img="favoritos" />
      <Title>
        <h1>Meus Favoritos</h1>
      </Title>
      <section className={homeStyle.container}>
        {cardsToRender.map((fav) => {
          return (
            <Card
              id={fav.id}
              key={fav.id}
              title={fav.title}
              cover={fav.cover}
            />
          );
        })}
      </section>
    </>
  );
};

export default Favorites;
