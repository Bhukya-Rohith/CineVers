import { Link } from 'react-router-dom';
import Button from '../components/Button';

export default function NotFoundPage() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4 py-20 text-center">
      <div className="rounded-[2rem] border border-white/10 bg-[#111111]/95 p-10 shadow-glow">
        <p className="text-sm uppercase tracking-[0.3em] text-[#f84464]">404</p>
        <h1 className="mt-4 text-5xl font-semibold text-white">Page not found</h1>
        <p className="mt-4 max-w-xl text-sm text-white/70">The CineVerse screen you requested cannot be located, but the next blockbuster is just a click away.</p>
        <div className="mt-8">
          <Link to="/">
            <Button>Go back to Dashboard</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
