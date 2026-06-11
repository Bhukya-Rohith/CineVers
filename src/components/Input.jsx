export default function Input({ label, error, className = '', ...props }) {
  return (
    <label className={`flex w-full flex-col gap-2 text-sm ${className}`}>
      <span className="text-white/70">{label}</span>
      <input
        className="rounded-3xl border border-white/10 bg-[#111111]/90 px-4 py-3 text-white outline-none transition focus:border-[#f84464] focus:ring-2 focus:ring-[#f84464]/20"
        {...props}
      />
      {error ? <span className="text-xs text-[#f84464]">{error}</span> : null}
    </label>
  );
}
