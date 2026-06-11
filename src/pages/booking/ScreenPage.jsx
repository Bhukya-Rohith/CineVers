import { useNavigate } from 'react-router-dom';
import { screens } from '../../data/screens';
import Button from '../../components/Button';
import { useBooking } from '../../context/BookingContext';

export default function ScreenPage() {
  const navigate = useNavigate();
  const { booking, setBooking } = useBooking();

  return (
    <div className="space-y-8">
      <div className="rounded-[2rem] border border-white/10 bg-[#111111]/80 p-8 shadow-glow">
        <p className="text-sm uppercase tracking-[0.3em] text-[#f84464]">Step 3</p>
        <h1 className="text-3xl font-semibold text-white">Pick the screen type for your movie.</h1>
        <p className="mt-3 max-w-2xl text-white/70">Premium auditorium screens let you elevate the showtime experience with exceptional sound and visuals.</p>
      </div>
      <div className="grid gap-5 xl:grid-cols-2">
        {screens.map((screen) => (
          <div key={screen.id} className="rounded-[2rem] border border-white/10 bg-[#090909]/90 p-8 transition hover:border-[#f84464] hover:bg-[#111111]/90">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold text-white">{screen.name}</h2>
                <p className="mt-3 text-sm text-white/70">{screen.description}</p>
              </div>
              <span className="rounded-3xl bg-white/5 px-3 py-1 text-sm text-white/70">{Math.round(screen.priceModifier * 100)}%</span>
            </div>
            <div className="mt-6 flex gap-4">
              <Button
                onClick={() => {
                  setBooking({ screen: screen.name, showtime: null, seats: [] });
                  navigate('/booking/showtime');
                }}
              >
                Select screen
              </Button>
              <Button variant="secondary" onClick={() => navigate('/booking/theatre')}>
                Change theatre
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
