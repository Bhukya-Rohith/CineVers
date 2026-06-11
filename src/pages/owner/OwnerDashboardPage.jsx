import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { theatres as theatresData } from '../../data/theatres';

const metrics = [
  { label: 'Monthly revenue', value: '₹12.4M' },
  { label: 'Active shows', value: '38' },
  { label: 'Pending approvals', value: '6' },
  { label: 'Seat occupancy', value: '82%' },
];

export default function OwnerDashboardPage() {
  return (
    <motion.div className="space-y-8">
      <section className="rounded-[2rem] border border-white/10 bg-[#111111]/80 p-8 shadow-glow">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#f84464]">Owner dashboard</p>
            <h1 className="text-3xl font-semibold text-white">Manage screens, bookings, and premium show slots.</h1>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white" to="/owner/movies">Add/Edit Movies</Link>
            <Link className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white" to="/owner/dashboard">View bookings</Link>
          </div>
        </div>
      </section>
      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
          <div key={metric.label} className="rounded-[2rem] border border-white/10 bg-[#090909]/90 p-6 shadow-glow">
            <p className="text-sm uppercase tracking-[0.3em] text-[#f84464]">{metric.label}</p>
            <p className="mt-4 text-3xl font-semibold text-white">{metric.value}</p>
          </div>
        ))}
      </section>
      <section className="rounded-[2rem] border border-white/10 bg-[#111111]/80 p-8 shadow-glow">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#f84464]">Theatre roster</p>
            <h2 className="text-2xl font-semibold text-white">Premium locations under management</h2>
          </div>
        </div>
        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {theatersData.map((theatre) => (
            <div key={theatre.id} className="rounded-3xl border border-white/10 bg-[#090909]/90 p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">{theatre.name}</h3>
                  <p className="mt-2 text-sm text-white/70">{theatre.distance} · {theatre.rating}★</p>
                </div>
                <span className="rounded-3xl bg-white/5 px-3 py-1 text-sm text-white/70">Manage</span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2 text-sm text-white/60">
                {theatre.facilities.map((facility) => (
                  <span key={facility} className="rounded-full border border-white/10 bg-white/5 px-3 py-1">{facility}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
