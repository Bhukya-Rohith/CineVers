export default function Button({ children, variant = 'primary', className = '', as: Component = 'button', ...props }) {
  const base = 'inline-flex items-center justify-center rounded-3xl px-6 py-3 text-sm font-semibold transition duration-300';
  const styles = {
    primary: 'bg-gradient-to-r from-[#f84464] to-[#ff4b7b] text-white shadow-glow hover:opacity-95',
    secondary: 'border border-white/10 bg-white/5 text-white hover:bg-white/10',
    ghost: 'text-white/90 hover:text-white',
  };
  return (
    <Component className={`${base} ${styles[variant]} ${className}`} {...props}>
      {children}
    </Component>
  );
}
