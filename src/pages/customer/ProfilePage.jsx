import { motion } from 'framer-motion';
import { FaCrown, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { movies } from '../../data/movies';

export default function ProfilePage() {
  const favorites = movies.slice(0, 4);

  return (
    <motion.div className="space-y-10">
      <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[2rem] border border-white/10 bg-[#111111]/80 p-8 shadow-glow">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Profile" className="h-24 w-24 rounded-3xl object-cover border border-white/10" />
              <div>
                <p className="text-sm text-white/70">Member since 2024</p>
                <h2 className="text-3xl font-semibold text-white">Ananya Kapoor</h2>
                <p className="text-sm text-white/70">Loyalty level: Premium Gold</p>
              </div>
            </div>
            <div className="rounded-3xl bg-[#0f0f0f]/90 p-5 text-center">
              <p className="text-sm uppercase tracking-[0.3em] text-[#f84464]">Membership</p>
              <p className="mt-3 text-3xl font-semibold text-white">Gold</p>
              <p className="text-sm text-white/70">Earned 4 free tickets</p>
            </div>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-[#090909]/80 p-5">
              <p className="text-sm text-white/50">Upcoming booking</p>
              <p className="mt-3 text-lg font-semibold text-white">Interstellar · PVR Cinemas</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-[#090909]/80 p-5">
              <p className="text-sm text-white/50">Favorite genre</p>
              <p className="mt-3 text-lg font-semibold text-white">Sci-Fi / Action</p>
            </div>
          </div>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-[#111111]/80 p-8 shadow-glow">
          <div className="flex items-center gap-4 text-white/70">
            <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-[#f84464]/10 text-[#f84464]">
              <FaCrown className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#f84464]">Premium perks</p>
              <p className="mt-2 text-lg font-semibold text-white">VIP lounge access, express booking, and priority seats.</p>
            </div>
          </div>
          <div className="mt-8 space-y-4">
            <div className="rounded-3xl border border-white/10 bg-[#090909]/80 p-5">
              <p className="text-sm text-white/50">Favorite movies</p>
              <p className="mt-2 text-white">7 movies saved</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-[#090909]/80 p-5">
              <p className="text-sm text-white/50">Member score</p>
              <div className="mt-3 flex items-center gap-2 text-white">
                <FaStar className="text-[#f84464]" />
                <span className="text-lg font-semibold">4.9 / 5</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="rounded-[2rem] border border-white/10 bg-[#111111]/80 p-8 shadow-glow">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#f84464]">Favorites</p>
            <h2 className="text-2xl font-semibold text-white">Movies you love</h2>
          </div>
          <Link to="/catalog" className="text-sm text-[#f84464] hover:text-[#ff7b9b]">Explore more</Link>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {favorites.map((movie) => (
            <div key={movie.id} className="rounded-3xl border border-white/10 bg-[#090909]/80 overflow-hidden shadow-glow">
              <img src={movie.poster} alt={movie.title} className="h-64 w-full object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white">{movie.title}</h3>
                <p className="mt-2 text-sm text-white/70">{movie.genre[0]}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
