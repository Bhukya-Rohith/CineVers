import { motion } from 'framer-motion';
import { useBooking } from '../../context/BookingContext';
import Button from '../../components/Button';

export default function ConfirmationPage() {
  const { booking, resetBooking } = useBooking();

  const details = [
    { label: 'Movie', value: booking.movie?.title || 'N/A' },
    { label: 'Theatre', value: booking.theatre || 'N/A' },
    { label: 'Showtime', value: booking.showtime || 'N/A' },
    { label: 'Seats', value: booking.seats?.join(', ') || 'N/A' },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-10">
      <div className="rounded-[2rem] border border-white/10 bg-[#111111]/80 p-10 text-center shadow-glow">
        <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-[#f84464]/10 text-[#f84464] shadow-glow">
          <span className="text-5xl">✓</span>
        </div>
        <h1 className="text-4xl font-semibold text-white">Booking Confirmed</h1>
        <p className="mt-4 max-w-2xl mx-auto text-white/70">Your CineVerse ticket is ready. Show the QR code at the theatre entrance and enjoy the premium screening.</p>
      </div>
      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[2rem] border border-white/10 bg-[#090909]/90 p-8 shadow-glow">
          <p className="text-sm uppercase tracking-[0.3em] text-[#f84464]">Ticket details</p>
          {booking.movie?.poster && (
            <div className="mt-6 flex items-center gap-4 rounded-3xl border border-white/10 bg-[#111111]/80 p-4">
              <img src={booking.movie.poster} alt={booking.movie.title} className="h-24 w-16 rounded-2xl object-cover" />
              <div>
                <p className="text-sm text-white/70">Movie</p>
                <p className="mt-2 text-lg font-semibold text-white">{booking.movie.title}</p>
              </div>
            </div>
          )}
          <div className="mt-6 space-y-4">
            {details.map((item) => (
              <div key={item.label} className="rounded-3xl border border-white/10 bg-[#111111]/80 p-5">
                <p className="text-sm text-white/70">{item.label}</p>
                <p className="mt-2 text-lg font-semibold text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-[#111111]/80 p-8 text-center shadow-glow">
          <div className="mx-auto mb-6 h-64 w-64 rounded-3xl border border-white/10 bg-gradient-to-br from-[#181818] to-[#090909] p-6">
            <div className="grid h-full place-items-center rounded-3xl bg-[#0f0f0f] text-white/70">
              <div className="h-40 w-40 rounded-3xl bg-white/5 p-6 text-xs leading-tight text-white/60">
                <p className="mb-4 text-center text-sm uppercase tracking-[0.3em] text-[#f84464]">QR Ticket</p>
                <div className="mx-auto h-24 w-24 rounded-3xl bg-white/10" />
              </div>
            </div>
          </div>
          <p className="text-sm text-white/70">Booking ID</p>
          <p className="mt-2 text-xl font-semibold text-white">{booking.bookingId}</p>
          <Button onClick={() => resetBooking()} className="mt-6 w-full">Start new booking</Button>
        </div>
      </div>
    </motion.div>
  );
}
