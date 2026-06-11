import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import { useBooking } from '../../context/BookingContext';

export default function SummaryPage() {
  const navigate = useNavigate();
  const { booking } = useBooking();

  const ticketPrice = 360;
  const seatCount = booking.seats?.length || 0;
  const base = seatCount * ticketPrice;
  const taxes = Math.round(base * 0.12);
  const total = base + taxes;

  return (
    <div className="space-y-8">
      <div className="rounded-[2rem] border border-white/10 bg-[#111111]/80 p-8 shadow-glow">
        <p className="text-sm uppercase tracking-[0.3em] text-[#f84464]">Step 6</p>
        <h1 className="text-3xl font-semibold text-white">Review your booking before confirmation.</h1>
        <p className="mt-3 max-w-2xl text-white/70">Confirm your movie, theatre, seats, and total amount before finalizing the premium cinema experience.</p>
      </div>
      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[2rem] border border-white/10 bg-[#090909]/90 p-8 shadow-glow">
          <div className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-[#111111]/80 p-6">
              <p className="text-sm text-white/70">Movie</p>
              <div className="mt-2 flex items-center gap-4">
                {booking.movie?.poster && (
                  <img src={booking.movie.poster} alt={booking.movie.title} className="h-20 w-14 rounded-2xl object-cover" />
                )}
                <p className="text-xl font-semibold text-white">{booking.movie?.title || 'No movie selected'}</p>
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-[#111111]/80 p-6">
              <p className="text-sm text-white/70">Theatre</p>
              <p className="mt-2 text-xl font-semibold text-white">{booking.theatre || 'Not chosen yet'}</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-[#111111]/80 p-6">
              <p className="text-sm text-white/70">Screen & Showtime</p>
              <p className="mt-2 text-xl font-semibold text-white">{booking.screen || 'Pending'} · {booking.showtime || 'Pending'}</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-[#111111]/80 p-6">
              <p className="text-sm text-white/70">Seats</p>
              <p className="mt-2 text-xl font-semibold text-white">{booking.seats?.join(', ') || 'None'}</p>
            </div>
          </div>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-[#111111]/80 p-8 shadow-glow">
          <div className="space-y-4">
            <div className="flex items-center justify-between text-white/70">
              <span>Base fare ({seatCount} seats)</span>
              <span>₹{base}</span>
            </div>
            <div className="flex items-center justify-between text-white/70">
              <span>Taxes & fees</span>
              <span>₹{taxes}</span>
            </div>
            <div className="border-t border-white/10 pt-4 text-xl font-semibold text-white">
              <div className="flex items-center justify-between">
                <span>Total</span>
                <span>₹{total}</span>
              </div>
            </div>
          </div>
          <Button onClick={() => navigate('/booking/confirmation')} className="mt-6 w-full">Proceed to payment</Button>
          <Button variant="secondary" onClick={() => navigate('/booking/seats')} className="mt-3 w-full">
            Edit seats
          </Button>
        </div>
      </div>
    </div>
  );
}
