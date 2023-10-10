import { useFavoriteContext } from "contexts/favoritesProvider";

import { Link } from "react-router-dom";
import { memo } from "react";

import cardStyle from "./card.module.css";
import favoriteImg from "./favorite.png";
import unfavoriteImg from "./unfavorite.png";

const Card = ({ title, cover, id, link }) => {
  const { favorites, updateFav } = useFavoriteContext();
  const favsIds = favorites.map((fav) => fav.id);

  return (
    <div className={cardStyle.container}>
      <Link className={cardStyle.link} to={`/videos/${id}`}>
        <img src={cover} alt={title} className={cardStyle.cover} />
        <h2>{title}</h2>
      </Link>
      <img
        src={favsIds.includes(id) ? unfavoriteImg : favoriteImg}
        alt="Favoritar filme"
        className={cardStyle.favorite}
        onClick={() => updateFav({ title, cover, id, link })}
      />
    </div>
  );
};

export default memo(Card);
