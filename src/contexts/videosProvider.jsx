import { createContext, useContext, useState, useEffect } from "react";

export const VideosContext = createContext();
VideosContext.displayName = "Videos";

const VideosProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetch(
      `https://my-json-server.typicode.com/JeffVenancius/cinetag-api/videos`
    )
      .then((res) => res.json())
      .then((data) => setVideos([...data]));
  }, []);

  return (
    <VideosContext.Provider value={{ videos }}>
      {children}
    </VideosContext.Provider>
  );
};

export const useVideosContext = () => {
  const { videos } = useContext(VideosContext);
  return videos;
};

export default VideosProvider;
