import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthorizeStatus } from '../../const';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorite-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFound from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../../components/private-route/private-route';
import { Offer } from '../../types/offer';


type AppScreenProps = {
  offers: Offer[];
}

const App = ({offers}: AppScreenProps): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route
        path={AppRoute.Main}
        element={<MainPage offers={offers} />}
      />
      <Route
        path={AppRoute.Login}
        element={<LoginPage />}
      />
      <Route
        path={AppRoute.Favorites}
        element={
          <PrivateRoute
            authorizeStatus={AuthorizeStatus.Auth}
          >
            <FavoritesPage offers={offers} />
          </PrivateRoute>
        }
      />
      <Route
        path={AppRoute.Offer}
        element={<OfferPage />}
      />
      <Route
        path="*"
        element={<NotFound />}
      />
    </Routes>
  </BrowserRouter>

);

export default App;
