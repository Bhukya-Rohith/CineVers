import { useNavigate } from 'react-router-dom';
import { showtimes } from '../../data/showtimes';
import Button from '../../components/Button';
import { useBooking } from '../../context/BookingContext';

export default function ShowtimePage() {
  const navigate = useNavigate();
  const { booking, setBooking } = useBooking();

  return (
    <div className="space-y-8">
      <div className="rounded-[2rem] border border-white/10 bg-[#111111]/80 p-8 shadow-glow">
        <p className="text-sm uppercase tracking-[0.3em] text-[#f84464]">Step 4</p>
        <h1 className="text-3xl font-semibold text-white">Choose the showtime that fits your evening.</h1>
        <p className="mt-3 max-w-2xl text-white/70">Morning, afternoon, evening, or night—CineVerse has premium slots for every cinematic mood.</p>
      </div>
      <div className="grid gap-5">
        {showtimes.map((block) => (
          <div key={block.label} className="rounded-[2rem] border border-white/10 bg-[#090909]/90 p-6 shadow-glow">
            <div className="flex items-center justify-between gap-3">
              <div>
                <h2 className="text-2xl font-semibold text-white">{block.label}</h2>
                <p className="mt-2 text-sm text-white/70">{block.slots.length} slots available</p>
              </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              {block.slots.map((time) => (
                <button
                  key={time}
                  type="button"
                  onClick={() => {
                    setBooking({ showtime: time, seats: [] });
                    navigate('/booking/seats');
                  }}
                  className="rounded-3xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-white transition hover:border-[#f84464] hover:bg-[#f84464]/10"
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-end gap-4">
        <Button variant="secondary" onClick={() => navigate('/booking/screen')}>Back</Button>
      </div>
    </div>
  );
}
