import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../../components/Button';
import Input from '../../components/Input';

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative z-10 mx-auto w-full max-w-3xl rounded-[2rem] border border-white/10 bg-[#121212]/95 p-8 shadow-glow backdrop-blur-xl sm:p-10"
    >
      <div className="mb-8 flex flex-col gap-3 text-center">
        <span className="text-sm uppercase tracking-[0.35em] text-[#f84464]">Welcome back to CineVerse</span>
        <h1 className="text-4xl font-semibold text-white">Login to continue your premium booking journey.</h1>
        <p className="text-sm text-white/70">Secure access to curated screenings, loyalty perks, and instant ticketing.</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid gap-4 sm:grid-cols-2">
          <Input label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <Input label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <label className="flex items-center gap-2 text-sm text-white/70">
            <input type="checkbox" className="h-4 w-4 rounded border-white/20 bg-[#111] text-[#f84464] focus:ring-[#f84464]" />
            Remember me
          </label>
          <Link to="/signup" className="text-sm text-[#f84464] hover:text-[#ff7b9b]">Create account</Link>
        </div>
        <Button type="submit" className="w-full">Continue to CineVerse</Button>
      </form>
      <div className="mt-8 space-y-4 text-center text-sm text-white/70">
        <p>Or sign in with social login</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button variant="secondary">Google</Button>
          <Button variant="secondary">Apple</Button>
          <Button variant="secondary">Facebook</Button>
        </div>
      </div>
      <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-4 text-center text-sm text-white/70">
        Forgot Password? No worries, use <span className="text-[#f84464]">support@cineverse.com</span>
      </div>
    </motion.div>
  );
}
