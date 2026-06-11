import { AnimatePresence, motion } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './layouts/Layout';
import AuthLayout from './layouts/AuthLayout';
import LoginPage from './pages/auth/LoginPage';
import SignupPage from './pages/auth/SignupPage';
import DashboardPage from './pages/customer/DashboardPage';
import CatalogPage from './pages/customer/CatalogPage';
import MovieDetailsPage from './pages/customer/MovieDetailsPage';
import LocationPage from './pages/booking/LocationPage';
import TheatrePage from './pages/booking/TheatrePage';
import ScreenPage from './pages/booking/ScreenPage';
import ShowtimePage from './pages/booking/ShowtimePage';
import SeatSelectionPage from './pages/booking/SeatSelectionPage';
import SummaryPage from './pages/booking/SummaryPage';
import ConfirmationPage from './pages/booking/ConfirmationPage';
import ProfilePage from './pages/customer/ProfilePage';
import SettingsPage from './pages/customer/SettingsPage';
import HistoryPage from './pages/customer/HistoryPage';
import OwnerDashboardPage from './pages/owner/OwnerDashboardPage';
import OwnerManageMoviesPage from './pages/owner/OwnerManageMoviesPage';
import AdminDashboardPage from './pages/admin/AdminDashboardPage';
import AdminUsersPage from './pages/admin/AdminUsersPage';
import AdminTheatresPage from './pages/admin/AdminTheatresPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(248,68,100,0.18),_transparent_26%),linear-gradient(180deg,_#111,_#090909)] text-white"
      >
        <Routes location={location} key={location.pathname}>
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Route>
          <Route element={<Layout />}>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/movie/:id" element={<MovieDetailsPage />} />
            <Route path="/booking/location" element={<LocationPage />} />
            <Route path="/booking/theatre" element={<TheatrePage />} />
            <Route path="/booking/screen" element={<ScreenPage />} />
            <Route path="/booking/showtime" element={<ShowtimePage />} />
            <Route path="/booking/seats" element={<SeatSelectionPage />} />
            <Route path="/booking/summary" element={<SummaryPage />} />
            <Route path="/booking/confirmation" element={<ConfirmationPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/owner/dashboard" element={<OwnerDashboardPage />} />
            <Route path="/owner/movies" element={<OwnerManageMoviesPage />} />
            <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
            <Route path="/admin/users" element={<AdminUsersPage />} />
            <Route path="/admin/theatres" element={<AdminTheatresPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
