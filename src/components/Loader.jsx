export default function Loader() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="animate-pulse rounded-[2rem] border border-white/10 bg-[#111111]/80 p-6">
          <div className="mb-4 h-56 w-full rounded-3xl bg-white/5" />
          <div className="space-y-3">
            <div className="h-4 w-3/4 rounded-full bg-white/5" />
            <div className="h-4 w-1/2 rounded-full bg-white/5" />
            <div className="h-10 w-full rounded-3xl bg-white/5" />
          </div>
        </div>
      ))}
    </div>
  );
}
