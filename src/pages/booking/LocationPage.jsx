import { useNavigate } from 'react-router-dom';
import { locations } from '../../data/locations';
import Button from '../../components/Button';
import { useBooking } from '../../context/BookingContext';

export default function LocationPage() {
  const navigate = useNavigate();
  const { booking, setBooking } = useBooking();

  return (
    <div className="space-y-8">
      <div className="rounded-[2rem] border border-white/10 bg-[#111111]/80 p-8 shadow-glow">
        <p className="text-sm uppercase tracking-[0.3em] text-[#f84464]">Step 1</p>
        <h1 className="text-3xl font-semibold text-white">Select your city for the premium screening.</h1>
        <p className="mt-3 max-w-2xl text-white/70">CineVerse offers landmark theatres in top cities with IMAX, Dolby Atmos, and luxury auditoriums.</p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {locations.map((location) => (
          <button
            type="button"
            key={location.city}
            onClick={() => {
              setBooking({ location: location.city, theatre: null, screen: null, showtime: null, seats: [] });
              navigate('/booking/theatre');
            }}
            className={`rounded-[2rem] border border-white/10 p-8 text-left transition hover:border-[#f84464] hover:bg-[#121212]/90 ${booking.location === location.city ? 'bg-[#111111]' : 'bg-[#090909]/90'}`}
          >
            <h2 className="text-2xl font-semibold text-white">{location.city}</h2>
            <p className="mt-3 text-sm text-white/70">{location.description}</p>
          </button>
        ))}
      </div>
      <div className="flex justify-end">
        <Button variant="secondary" onClick={() => navigate('/catalog')}>Back to catalog</Button>
      </div>
    </div>
  );
}
