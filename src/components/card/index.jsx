import { Link } from "react-router-dom";
import { memo, useState } from "react";

import { useFavoriteContext } from "contexts/favoritesProvider";

import cardStyle from "./card.module.css";
import favoriteImg from "./favorite.png";
import unfavoriteImg from "./unfavorite.png";

const Card = ({ title, cover, id }) => {
  const { favorites, updateFav } = useFavoriteContext();
  const [Favorite, setFavorite] = useState(favorites.current.includes(id));
  return (
    <div className={cardStyle.container}>
      <Link className={cardStyle.link} to={`/videos/${id}`}>
        <img src={cover} alt={title} className={cardStyle.cover} />
        <h2>{title}</h2>
      </Link>
      <img
        src={Favorite ? unfavoriteImg : favoriteImg}
        alt="Favoritar filme"
        className={cardStyle.favorite}
        onClick={() => {
          setFavorite(!Favorite);
          updateFav(id);
        }}
      />
    </div>
  );
};

export default memo(Card);
