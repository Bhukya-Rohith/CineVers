import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function Layout() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(248,68,100,0.14),_transparent_25%),linear-gradient(180deg,_#111,_#090909)] text-white">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 pb-16 pt-24 sm:px-6 lg:px-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
