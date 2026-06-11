import { motion } from 'framer-motion';

const seatRows = ['A', 'B', 'C', 'D', 'E', 'F'];
const seatCols = [1, 2, 3, 4, 5, 6, 7, 8];

export default function SeatGrid({ selectedSeats, bookedSeats, onToggle }) {
  return (
    <div className="space-y-4 rounded-[2rem] border border-white/10 bg-[#111111]/80 p-6 shadow-glow">
      <div className="grid gap-3">
        {seatRows.map((row) => (
          <div key={row} className="flex items-center gap-3">
            <span className="w-6 text-sm font-semibold text-white/70">{row}</span>
            <div className="grid flex-1 grid-cols-8 gap-3">
              {seatCols.map((col) => {
                const seatId = `${row}${col}`;
                const isBooked = bookedSeats.includes(seatId);
                const isSelected = selectedSeats.includes(seatId);
                return (
                  <motion.button
                    key={seatId}
                    whileTap={{ scale: isBooked ? 1 : 0.95 }}
                    onClick={() => !isBooked && onToggle(seatId)}
                    className={`rounded-2xl border px-2 py-2 text-xs font-semibold transition ${
                      isBooked
                        ? 'cursor-not-allowed border-white/10 bg-white/10 text-white/40'
                        : isSelected
                        ? 'border-[#f84464] bg-[#f84464]/20 text-[#f84464]'
                        : 'border-white/10 bg-[#111111] text-white/80 hover:border-[#f84464] hover:bg-[#f84464]/10'
                    }`}
                  >
                    {col}
                  </motion.button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-3 rounded-3xl border border-white/10 bg-[#090909]/80 p-4 text-xs text-white/70 sm:grid-cols-3">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#111111] border border-white/10" /> Available
        </div>
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#f84464]/20 border border-[#f84464]" /> Selected
        </div>
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-white/10 border border-white/10" /> Booked
        </div>
      </div>
    </div>
  );
}
