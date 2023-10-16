import { memo, useCallback } from "react";

import likeButtonStyle from "./likeButton.module.css";

const LikeButton = () => {
  return (
    <img
      src={favsIds.includes(id) ? unfavoriteImg : favoriteImg}
      alt="Favoritar filme"
      className={likeButtonStyle.favorite}
      onClick={useCallback(() => updateFav({ title, cover, id, link }), [])}
    />
  );
};

export default memo(LikeButton);
