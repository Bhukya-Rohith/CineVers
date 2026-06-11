import { Link, NavLink } from 'react-router-dom';
import { FaFilm, FaUserAlt, FaTheaterMasks, FaChartLine } from 'react-icons/fa';

const links = [
  { to: '/', label: 'Dashboard' },
  { to: '/catalog', label: 'Catalog' },
  { to: '/profile', label: 'Profile' },
  { to: '/history', label: 'History' },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-[#070707]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3 text-white">
          <div className="flex h-10 w-10 items-center justify-center rounded-3xl bg-gradient-to-br from-[#f84464] via-[#ff4b7b] to-[#bf1732] shadow-glow">
            <FaFilm className="text-xl" />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-white/70">CineVerse</p>
            <p className="text-lg font-semibold">Premium Cinema</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-medium transition ${isActive ? 'text-white' : 'text-white/70 hover:text-white'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden items-center gap-4 md:flex">
          <Link to="/owner/dashboard" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10">
            Owner
          </Link>
          <Link to="/admin/dashboard" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10">
            Admin
          </Link>
        </div>
      </div>
    </header>
  );
}
