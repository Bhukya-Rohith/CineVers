import { motion } from 'framer-motion';
import { users } from '../../data/users';

export default function AdminDashboardPage() {
  return (
    <motion.div className="space-y-8">
      <section className="rounded-[2rem] border border-white/10 bg-[#111111]/80 p-8 shadow-glow">
        <p className="text-sm uppercase tracking-[0.3em] text-[#f84464]">Admin portal</p>
        <h1 className="text-3xl font-semibold text-white">Monitor users, theatres, and approval analytics.</h1>
        <p className="mt-3 max-w-2xl text-white/70">Keep the platform stable with curated approvals, performance dashboards, and membership reports.</p>
      </section>
      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-[2rem] border border-white/10 bg-[#090909]/90 p-6 shadow-glow">
          <p className="text-sm uppercase tracking-[0.3em] text-[#f84464]">Active users</p>
          <p className="mt-4 text-3xl font-semibold text-white">{users.length * 1200}</p>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-[#090909]/90 p-6 shadow-glow">
          <p className="text-sm uppercase tracking-[0.3em] text-[#f84464]">Pending theatres</p>
          <p className="mt-4 text-3xl font-semibold text-white">9</p>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-[#090909]/90 p-6 shadow-glow">
          <p className="text-sm uppercase tracking-[0.3em] text-[#f84464]">Monthly bookings</p>
          <p className="mt-4 text-3xl font-semibold text-white">14.2K</p>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-[#090909]/90 p-6 shadow-glow">
          <p className="text-sm uppercase tracking-[0.3em] text-[#f84464]">Revenue growth</p>
          <p className="mt-4 text-3xl font-semibold text-white">18%</p>
        </div>
      </section>
      <section className="grid gap-5 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-white/10 bg-[#111111]/80 p-8 shadow-glow">
          <p className="text-sm uppercase tracking-[0.3em] text-[#f84464]">User spotlight</p>
          <div className="mt-6 space-y-4">
            {users.map((user) => (
              <div key={user.id} className="flex items-center gap-4 rounded-3xl border border-white/10 bg-[#090909]/80 p-4">
                <img src={user.avatar} alt={user.name} className="h-14 w-14 rounded-2xl object-cover" />
                <div>
                  <p className="font-semibold text-white">{user.name}</p>
                  <p className="text-sm text-white/70">{user.role} · {user.plan}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-[#111111]/80 p-8 shadow-glow">
          <p className="text-sm uppercase tracking-[0.3em] text-[#f84464]">Reports</p>
          <div className="mt-6 space-y-4">
            <div className="rounded-3xl border border-white/10 bg-[#090909]/80 p-6">
              <p className="text-sm text-white/70">Approval queue</p>
              <p className="mt-3 text-lg font-semibold text-white">Review 38 theatre requests</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-[#090909]/80 p-6">
              <p className="text-sm text-white/70">Quality score</p>
              <p className="mt-3 text-lg font-semibold text-white">94%</p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
