import { useState } from 'react';
import { theatres } from '../../data/theatres';
import Button from '../../components/Button';

export default function AdminTheatresPage() {
  const [selected, setSelected] = useState('pending');
  const viewed = selected === 'pending' ? theatres.slice(0, 2) : theatres.slice(2);

  return (
    <div className="space-y-8">
      <div className="rounded-[2rem] border border-white/10 bg-[#111111]/80 p-8 shadow-glow">
        <p className="text-sm uppercase tracking-[0.3em] text-[#f84464]">Theatre approval</p>
        <h1 className="text-3xl font-semibold text-white">Review theatres and manage the cinema network.</h1>
      </div>
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => setSelected('pending')}
          className={`rounded-full px-5 py-3 text-sm ${selected === 'pending' ? 'bg-[#f84464] text-white' : 'bg-white/5 text-white/70 hover:bg-white/10'}`}
        >
          Pending approvals
        </button>
        <button
          type="button"
          onClick={() => setSelected('active')}
          className={`rounded-full px-5 py-3 text-sm ${selected === 'active' ? 'bg-[#f84464] text-white' : 'bg-white/5 text-white/70 hover:bg-white/10'}`}
        >
          Active theatres
        </button>
      </div>
      <div className="grid gap-5 xl:grid-cols-2">
        {viewed.map((theatre) => (
          <div key={theatre.id} className="rounded-[2rem] border border-white/10 bg-[#090909]/90 p-6 shadow-glow">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold text-white">{theatre.name}</h2>
                <p className="mt-2 text-sm text-white/70">Distance: {theatre.distance}</p>
              </div>
              <div className="flex flex-col items-end gap-2">
                <span className="rounded-3xl bg-[#f84464]/10 px-3 py-1 text-sm text-[#f84464]">{selected === 'pending' ? 'Pending' : 'Live'}</span>
                <Button variant="secondary">Review</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
