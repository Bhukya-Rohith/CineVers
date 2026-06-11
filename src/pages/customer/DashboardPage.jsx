import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import HeroBanner from '../../components/HeroBanner';
import MovieCard from '../../components/MovieCard';
import { movies } from '../../data/movies';
import { bookingHistory } from '../../data/bookings';

const categories = [
  { label: 'Trending Movies', filter: (movie) => movie.rating >= '7.5' },
  { label: 'Marvel Collection', filter: (movie) => movie.category === 'Marvel' },
  { label: 'Disney Collection', filter: (movie) => movie.category === 'Disney' },
  { label: 'Tollywood Blockbusters', filter: (movie) => movie.category === 'Tollywood' },
  { label: 'Upcoming Movies', filter: (movie) => movie.year >= 2024 },
  { label: 'Recommended For You', filter: (movie) => movie.rating >= '7.8' },
];

export default function DashboardPage() {
  return (
    <div className="space-y-10">
      <HeroBanner />
      {categories.map((section) => {
        const items = movies.filter(section.filter).slice(0, 5);
        return (
          <section key={section.label} className="space-y-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-[#f84464]">Featured</p>
                <h2 className="text-2xl font-semibold text-white">{section.label}</h2>
              </div>
              <Link to="/catalog" className="text-sm text-[#f84464] hover:text-[#ff7b9b]">View all</Link>
            </div>
            <motion.div
              className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {items.map((movie) => (
                <MovieCard movie={movie} key={movie.id} />
              ))}
            </motion.div>
          </section>
        );
      })}
      <section className="rounded-[2rem] border border-white/10 bg-[#111111]/80 p-8 shadow-glow">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#f84464]">Ticket vault</p>
            <h2 className="text-2xl font-semibold text-white">Your recent CineVerse bookings</h2>
          </div>
          <Link to="/history" className="text-sm text-[#f84464] hover:text-[#ff7b9b]">View full history</Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {bookingHistory.slice(0, 3).map((booking) => {
            const bookedMovie = movies.find((item) => item.id === booking.movieId || item.title === booking.movie);
            return (
              <div key={booking.id} className="rounded-3xl border border-white/10 bg-[#090909]/90 p-5">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    {bookedMovie?.poster && (
                      <img src={bookedMovie.poster} alt={booking.movie} className="h-20 w-14 rounded-2xl object-cover" />
                    )}
                    <div>
                      <h3 className="text-lg font-semibold text-white">{booking.movie}</h3>
                      <p className="text-sm text-white/60">{booking.date} · {booking.time}</p>
                    </div>
                  </div>
                  <span className="rounded-3xl bg-[#f84464]/10 px-3 py-1 text-sm text-[#f84464]">{booking.status}</span>
                </div>
                <p className="mt-4 text-sm text-white/70">Theatre: {booking.theatre}</p>
                <p className="mt-3 text-sm text-white/70">Seats: {booking.seats.join(', ')}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
