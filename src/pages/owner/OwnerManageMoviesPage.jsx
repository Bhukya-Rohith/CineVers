import { useMemo, useState } from 'react';
import { movies } from '../../data/movies';
import Button from '../../components/Button';

export default function OwnerManageMoviesPage() {
  const [query, setQuery] = useState('');
  const filtered = useMemo(
    () => movies.filter((movie) => movie.title.toLowerCase().includes(query.toLowerCase())),
    [query]
  );

  return (
    <div className="space-y-8">
      <div className="rounded-[2rem] border border-white/10 bg-[#111111]/80 p-8 shadow-glow">
        <p className="text-sm uppercase tracking-[0.3em] text-[#f84464]">Owner control</p>
        <h1 className="text-3xl font-semibold text-white">Add, edit, or review movie listings.</h1>
        <p className="mt-3 max-w-2xl text-white/70">Manage showtimes, promotions, and movie details for your premium theatre network.</p>
      </div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search movie title"
          className="w-full max-w-sm rounded-3xl border border-white/10 bg-[#0f0f0f]/90 px-4 py-3 text-white outline-none transition focus:border-[#f84464] focus:ring-2 focus:ring-[#f84464]/20"
        />
        <Button>Add new movie</Button>
      </div>
      <div className="grid gap-5 xl:grid-cols-3">
        {filtered.map((movie) => (
          <div key={movie.id} className="rounded-[2rem] border border-white/10 bg-[#090909]/90 p-5 shadow-glow">
            <div className="flex items-center gap-4">
              <img src={movie.poster} alt={movie.title} className="h-20 w-14 rounded-2xl object-cover" />
              <div>
                <h2 className="text-lg font-semibold text-white">{movie.title}</h2>
                <p className="text-sm text-white/70">{movie.category} · {movie.year}</p>
              </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button variant="secondary">Edit</Button>
              <Button variant="secondary">Shows</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
