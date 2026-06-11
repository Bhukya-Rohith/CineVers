import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import SeatGrid from '../../components/SeatGrid';
import { useBooking } from '../../context/BookingContext';

const bookedSeats = ['B3', 'B4', 'C6', 'D2', 'E8'];
const prices = { Platinum: 420, Gold: 360, Silver: 280 };

export default function SeatSelectionPage() {
  const navigate = useNavigate();
  const { booking, setBooking } = useBooking();
  const [selectedSeats, setSelectedSeats] = useState(booking.seats || []);

  const total = useMemo(() => selectedSeats.length * (prices.Gold || 360), [selectedSeats.length]);

  const toggleSeat = (seat) => {
    setSelectedSeats((prev) => (prev.includes(seat) ? prev.filter((item) => item !== seat) : [...prev, seat]));
  };

  const handleConfirm = () => {
    if (!selectedSeats.length) return;
    setBooking({ seats: selectedSeats });
    navigate('/booking/summary');
  };

  return (
    <div className="space-y-8">
      <div className="rounded-[2rem] border border-white/10 bg-[#111111]/80 p-8 shadow-glow">
        <p className="text-sm uppercase tracking-[0.3em] text-[#f84464]">Step 5</p>
        <h1 className="text-3xl font-semibold text-white">Reserve your preferred seats.</h1>
        <p className="mt-3 max-w-2xl text-white/70">Choose from Platinum, Gold, and Silver zones in a layout inspired by real cinematic seat booking.</p>
      </div>
      <div className="grid gap-6 lg:grid-cols-[1.4fr_0.7fr]">
        <div className="space-y-6 rounded-[2rem] border border-white/10 bg-[#090909]/90 p-8 shadow-glow">
          <div className="rounded-[2rem] border border-white/10 bg-[#111111]/80 p-6 text-white/70">
            <p className="text-sm uppercase tracking-[0.3em] text-[#f84464]">Screen</p>
            <h2 className="mt-3 text-lg font-semibold text-white">Front of the cinema</h2>
          </div>
          <SeatGrid selectedSeats={selectedSeats} bookedSeats={bookedSeats} onToggle={toggleSeat} />
        </div>
        <div className="space-y-6 rounded-[2rem] border border-white/10 bg-[#111111]/80 p-8 shadow-glow">
          <div className="rounded-3xl border border-white/10 bg-[#090909]/80 p-6">
            <p className="text-sm text-white/70">Platinum</p>
            <p className="mt-3 text-2xl font-semibold text-white">₹{prices.Platinum}</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-[#090909]/80 p-6">
            <p className="text-sm text-white/70">Gold</p>
            <p className="mt-3 text-2xl font-semibold text-white">₹{prices.Gold}</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-[#090909]/80 p-6">
            <p className="text-sm text-white/70">Silver</p>
            <p className="mt-3 text-2xl font-semibold text-white">₹{prices.Silver}</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-[#151515]/90 p-6">
            <p className="text-sm text-white/70">Selected Seats</p>
            <p className="mt-3 text-lg font-semibold text-white">{selectedSeats.length ? selectedSeats.join(', ') : 'None selected'}</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-[#151515]/90 p-6">
            <p className="text-sm text-white/70">Estimated total</p>
            <p className="mt-3 text-3xl font-semibold text-white">₹{total}</p>
          </div>
          <Button onClick={handleConfirm} className="w-full" disabled={!selectedSeats.length}>
            Confirm Seats
          </Button>
          <Button variant="secondary" onClick={() => navigate('/booking/showtime')}>
            Back to showtimes
          </Button>
        </div>
      </div>
    </div>
  );
}
