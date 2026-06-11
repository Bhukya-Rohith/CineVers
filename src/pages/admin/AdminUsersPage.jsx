import { useMemo, useState } from 'react';
import { users } from '../../data/users';
import Button from '../../components/Button';

export default function AdminUsersPage() {
  const [query, setQuery] = useState('');
  const filtered = useMemo(
    () => users.filter((user) => user.name.toLowerCase().includes(query.toLowerCase())),
    [query]
  );

  return (
    <div className="space-y-8">
      <div className="rounded-[2rem] border border-white/10 bg-[#111111]/80 p-8 shadow-glow">
        <p className="text-sm uppercase tracking-[0.3em] text-[#f84464]">User management</p>
        <h1 className="text-3xl font-semibold text-white">Manage platform members and account status.</h1>
      </div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search member"
          className="w-full max-w-sm rounded-3xl border border-white/10 bg-[#0f0f0f]/90 px-4 py-3 text-white outline-none transition focus:border-[#f84464] focus:ring-2 focus:ring-[#f84464]/20"
        />
        <Button>Invite new user</Button>
      </div>
      <div className="rounded-[2rem] border border-white/10 bg-[#090909]/90 p-6 shadow-glow">
        <div className="grid gap-3 text-white/60 sm:grid-cols-4 px-4 py-3 text-sm uppercase">
          <span>Name</span>
          <span>Role</span>
          <span>Plan</span>
          <span className="text-right">Action</span>
        </div>
        <div className="space-y-3">
          {filtered.map((user) => (
            <div key={user.id} className="grid gap-3 rounded-3xl border border-white/10 bg-[#111111]/80 p-4 sm:grid-cols-4">
              <span className="font-medium text-white">{user.name}</span>
              <span>{user.role}</span>
              <span>{user.plan}</span>
              <div className="text-right">
                <Button variant="secondary">View</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
