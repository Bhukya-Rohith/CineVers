import { Outlet } from 'react-router-dom';

export default function AuthLayout() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#060606] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(248,68,100,0.16),_transparent_20%),radial-gradient(circle_at_80%_20%,_rgba(255,255,255,0.08),_transparent_18%)]" />
      <div className="relative flex min-h-screen items-center justify-center px-4 py-16">
        <Outlet />
      </div>
    </div>
  );
}
