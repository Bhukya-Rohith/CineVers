import { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { movies } from '../../data/movies';
import Button from '../../components/Button';
import { useBooking } from '../../context/BookingContext';

export default function MovieDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { setBooking } = useBooking();
  const movie = useMemo(() => movies.find((item) => item.id === id), [id]);

  if (!movie) {
    return <div className="text-white">Movie not found.</div>;
  }

  return (
    <motion.div className="space-y-10">
      <div className="rounded-[2rem] border border-white/10 bg-[#121212]/90 p-6 shadow-glow backdrop-blur-xl lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          <div className="space-y-6">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-5">
                <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0f0f0f]/90 shadow-lg">
                  <img src={movie.poster} alt={movie.title} className="h-28 w-20 object-cover" />
                </div>
                <div>
                  <h1 className="text-4xl font-semibold text-white">{movie.title}</h1>
                  <p className="mt-2 text-sm text-white/70">Premium cinematic poster</p>
                </div>
              </div>
              <span className="rounded-3xl border border-white/10 bg-white/5 px-4 py-2 text-lg font-semibold text-[#f84464]">{movie.rating}</span>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-sm text-white/70">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">{movie.language}</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">{movie.duration}</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">{movie.genre.join(', ')}</span>
            </div>
            <p className="max-w-3xl text-white/70">{movie.synopsis}</p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-[#090909]/80 p-5">
                <p className="text-sm text-white/50">Director</p>
                <p className="mt-2 text-lg font-semibold text-white">{movie.director}</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-[#090909]/80 p-5">
                <p className="text-sm text-white/50">Cast</p>
                <p className="mt-2 text-lg font-semibold text-white">{movie.cast.join(', ')}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => {
                  setBooking({ movie });
                  navigate('/booking/location');
                }}
              >
                Book Ticket
              </Button>
              <Button variant="secondary" onClick={() => window.open(movie.trailer, '_blank')}>
                Watch Trailer
              </Button>
            </div>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#111111]/80 shadow-xl">
            <img src={movie.backdrop} alt={movie.title} className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-[2rem] border border-white/10 bg-[#111111]/80 p-6">
          <p className="text-sm uppercase tracking-[0.3em] text-[#f84464]">Ratings</p>
          <div className="mt-4 flex items-center gap-4">
            <span className="text-5xl font-semibold text-white">{movie.rating}</span>
            <div>
              <p className="text-sm text-white/70">Cinematic score</p>
              <p className="text-sm text-white/70">Critics and audience approved</p>
            </div>
          </div>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-[#111111]/80 p-6">
          <p className="text-sm uppercase tracking-[0.3em] text-[#f84464]">Language</p>
          <p className="mt-4 text-lg font-medium text-white">{movie.languageDetails}</p>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-[#111111]/80 p-6">
          <p className="text-sm uppercase tracking-[0.3em] text-[#f84464]">Runtime</p>
          <p className="mt-4 text-lg font-medium text-white">{movie.duration}</p>
        </div>
      </div>
    </motion.div>
  );
}
