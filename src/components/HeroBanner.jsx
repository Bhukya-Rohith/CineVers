import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { movies } from '../data/movies';
import Button from './Button';

export default function HeroBanner() {
  const featured = movies.slice(0, 6);
  const lead = featured[0];

  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#111111]/70 p-6 shadow-glow backdrop-blur-xl sm:p-8">
      <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_center,_rgba(248,68,100,0.25),_transparent_45%)] blur-3xl" />
      <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <p className="mb-4 inline-flex rounded-full border border-[#f84464]/30 bg-[#f84464]/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[#f84464]">
              Premium Booking
            </p>
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
              Enter the CineVerse and book your next blockbuster experience.
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
              A cinematic universe built for movie fans: curated releases, premium seats, live showtimes, and a booking flow designed for the modern film enthusiast.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/catalog">
                <Button>Browse Movies</Button>
              </Link>
              <Link to="/booking/location">
                <Button variant="secondary">Start Booking</Button>
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:w-[42%]">
          {featured.map((movie, index) => (
            <motion.div
              key={movie.id}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15 + index * 0.05 }}
              className="overflow-hidden rounded-3xl border border-white/10 bg-[#101010]/80 shadow-xl"
            >
              <img src={movie.poster} alt={movie.title} className="h-48 w-full object-cover transition duration-500 hover:scale-105" />
              <div className="space-y-2 px-4 py-4">
                <p className="text-sm font-semibold text-white">{movie.title}</p>
                <p className="text-xs text-white/60">{movie.genre.join(', ')}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
