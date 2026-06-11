import { useMemo, useState } from 'react';
import MovieCard from '../../components/MovieCard';
import { movies } from '../../data/movies';
import Loader from '../../components/Loader';

const categories = ['All', 'Marvel', 'Disney', 'Tollywood', 'Bollywood', 'Hollywood'];

export default function CatalogPage() {
  const [category, setCategory] = useState('All');
  const [query, setQuery] = useState('');

  const filteredMovies = useMemo(() => {
    return movies.filter((movie) => {
      const matchesCategory = category === 'All' || movie.category === category;
      const matchesQuery = movie.title.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <div className="space-y-8">
      <div className="rounded-[2rem] border border-white/10 bg-[#111111]/80 p-8 shadow-glow">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#f84464]">Catalog</p>
            <h1 className="text-3xl font-semibold text-white">Curated movies for your next booking.</h1>
          </div>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by title or genre"
            className="w-full max-w-sm rounded-3xl border border-white/10 bg-[#0f0f0f]/90 px-4 py-3 text-white outline-none transition focus:border-[#f84464] focus:ring-2 focus:ring-[#f84464]/20"
          />
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategory(cat)}
              className={`rounded-full px-5 py-2 text-sm transition ${category === cat ? 'bg-[#f84464] text-white' : 'bg-white/5 text-white/70 hover:bg-white/10'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      {filteredMovies.length === 0 ? (
        <div className="rounded-[2rem] border border-white/10 bg-[#111111]/80 p-8 text-center text-white/70 shadow-glow">
          No movies match your search. Try another genre or keyword.
        </div>
      ) : (
        <div className="grid gap-6 xl:grid-cols-3">
          {filteredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
      <div className="rounded-[2rem] border border-white/10 bg-[#090909]/80 p-8 shadow-glow">
        <h2 className="text-2xl font-semibold text-white">Movie universe spotlight</h2>
        <p className="mt-3 max-w-2xl text-white/70">Every title is hand-picked to reflect blockbuster releases, family favorites, and premium marquee screenings that feel cinematic.</p>
      </div>
    </div>
  );
}
