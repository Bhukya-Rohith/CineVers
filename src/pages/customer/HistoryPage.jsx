import { motion } from 'framer-motion';
import { bookingHistory } from '../../data/bookings';
import { movies } from '../../data/movies';

export default function HistoryPage() {
  return (
    <motion.div className="space-y-8">
      <div className="rounded-[2rem] border border-white/10 bg-[#111111]/80 p-8 shadow-glow">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#f84464]">Booking history</p>
            <h1 className="text-3xl font-semibold text-white">Review your CineVerse ticket past.</h1>
          </div>
          <p className="text-sm text-white/70">Every booking includes theatre, seats, and payment details for premium reference.</p>
        </div>
      </div>
      <div className="grid gap-6 xl:grid-cols-3">
        {bookingHistory.map((booking) => {
          const bookedMovie = movies.find((item) => item.id === booking.movieId || item.title === booking.movie);
          return (
            <div key={booking.id} className="rounded-[2rem] border border-white/10 bg-[#090909]/80 p-6 shadow-glow">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  {bookedMovie?.poster && (
                    <img src={bookedMovie.poster} alt={booking.movie} className="h-20 w-14 rounded-2xl object-cover" />
                  )}
                  <div>
                    <h2 className="text-xl font-semibold text-white">{booking.movie}</h2>
                    <p className="text-sm text-white/60">{booking.theatre}</p>
                  </div>
                </div>
                <span className="rounded-3xl bg-[#f84464]/10 px-3 py-1 text-sm text-[#f84464]">{booking.status}</span>
              </div>
              <div className="mt-4 space-y-3 text-sm text-white/70">
                <p>Date: {booking.date}</p>
                <p>Time: {booking.time}</p>
                <p>Seats: {booking.seats.join(', ')}</p>
                <p>Amount: ₹{booking.amount}</p>
              </div>
            </div>
          );
        })}
      </div>
      <section className="rounded-[2rem] border border-white/10 bg-[#111111]/80 p-8 shadow-glow">
        <p className="text-sm uppercase tracking-[0.3em] text-[#f84464]">Ticket insight</p>
        <p className="mt-4 text-white/70">Your booking history gives you a clear view of your past screen selections, premium theatres, and preferred film genres.</p>
      </section>
    </motion.div>
  );
}
