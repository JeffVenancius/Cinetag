import bannerStyle from "./banner.module.css";

const Banner = ({ img }) => {
  return (
    <div
      className={bannerStyle.cover}
      style={{ backgroundImage: `url('/img/banner-${img}.png')` }}
    ></div>
  );
};

export default Banner;
