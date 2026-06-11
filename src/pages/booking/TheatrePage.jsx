import { useNavigate } from 'react-router-dom';
import { theatres } from '../../data/theatres';
import Button from '../../components/Button';
import { useBooking } from '../../context/BookingContext';

export default function TheatrePage() {
  const navigate = useNavigate();
  const { booking, setBooking } = useBooking();

  return (
    <div className="space-y-8">
      <div className="rounded-[2rem] border border-white/10 bg-[#111111]/80 p-8 shadow-glow">
        <p className="text-sm uppercase tracking-[0.3em] text-[#f84464]">Step 2</p>
        <h1 className="text-3xl font-semibold text-white">Choose the premium theatre experience.</h1>
        <p className="mt-3 max-w-2xl text-white/70">Select from PVR, INOX, Cinepolis, and AMB Cinemas for a curated, luxury viewing.</p>
      </div>
      <div className="grid gap-5 xl:grid-cols-2">
        {theatres.map((theatre) => (
          <div
            key={theatre.id}
            className="rounded-[2rem] border border-white/10 bg-[#090909]/90 p-8 transition hover:border-[#f84464] hover:bg-[#111111]/90"
          >
            <div className="flex items-center justify-between gap-3">
              <div>
                <h2 className="text-2xl font-semibold text-white">{theatre.name}</h2>
                <p className="mt-2 text-sm text-white/70">{theatre.distance} · {theatre.rating}★</p>
              </div>
              <span className="rounded-3xl bg-[#f84464]/10 px-3 py-1 text-sm text-[#f84464]">Top Rated</span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2 text-xs uppercase tracking-[0.3em] text-white/60">
              {theatre.facilities.map((facility) => (
                <span key={facility} className="rounded-full border border-white/10 bg-white/5 px-3 py-1">{facility}</span>
              ))}
            </div>
            <div className="mt-6 flex gap-4">
              <Button
                onClick={() => {
                  setBooking({ theatre: theatre.name, screen: null, showtime: null, seats: [] });
                  navigate('/booking/screen');
                }}
              >
                Select theatre
              </Button>
              <Button variant="secondary" onClick={() => navigate('/booking/location')}>
                Change city
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
