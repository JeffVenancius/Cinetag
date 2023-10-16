import { Outlet } from "react-router-dom";
import Header from "components/header";
import FavoritesProvider from "contexts/favoritesProvider";
import VideosProvider from "contexts/videosProvider";
import Container from "components/container";
import Footer from "components/footer";

const BasePage = () => {
  return (
    <main>
      <Header />
      <FavoritesProvider>
        <VideosProvider>
          <Container>
            <Outlet />
          </Container>
        </VideosProvider>
      </FavoritesProvider>
      <Footer />
    </main>
  );
};

export default BasePage;
