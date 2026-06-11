import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from './Button';

export default function MovieCard({ movie }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      className="group overflow-hidden rounded-[2rem] border border-white/10 bg-[#111111]/90 shadow-glow transition"
    >
      <div className="relative overflow-hidden">
        <img src={movie.poster} alt={movie.title} className="h-96 w-full object-cover transition duration-500 group-hover:scale-105" />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-4">
          <p className="text-sm text-white/70">{movie.duration} · {movie.language}</p>
        </div>
      </div>
      <div className="space-y-4 p-5">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-white">{movie.title}</h3>
            <p className="text-sm text-white/60">{movie.genre.join(', ')}</p>
          </div>
          <span className="rounded-3xl bg-white/5 px-3 py-1 text-sm font-semibold text-[#f84464]">{movie.rating}</span>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button variant="secondary" as="div" className="px-4 py-2 text-xs uppercase tracking-[0.2em]">
            {movie.category}
          </Button>
          <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/70">{movie.year}</span>
        </div>
        <Link to={`/movie/${movie.id}`}>
          <Button className="w-full">Book Now</Button>
        </Link>
      </div>
    </motion.article>
  );
}
