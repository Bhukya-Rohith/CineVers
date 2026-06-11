import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../../components/Button';
import Input from '../../components/Input';

export default function SignupPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', mobile: '', password: '', confirm: '' });
  const [error, setError] = useState('');

  const handleChange = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (form.password !== form.confirm) {
      setError('Passwords do not match');
      return;
    }
    navigate('/');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative z-10 mx-auto w-full max-w-3xl rounded-[2rem] border border-white/10 bg-[#121212]/95 p-8 shadow-glow backdrop-blur-xl sm:p-10"
    >
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-semibold text-white">Create your CineVerse membership.</h1>
        <p className="mt-3 text-sm text-white/70">Get access to premium seats, exclusive offers, and cinematic rewards.</p>
      </div>
      <form onSubmit={handleSubmit} className="grid gap-5">
        <div className="grid gap-4 md:grid-cols-2">
          <Input label="Full Name" value={form.name} onChange={handleChange('name')} required />
          <Input label="Mobile" type="tel" value={form.mobile} onChange={handleChange('mobile')} required />
        </div>
        <Input label="Email Address" type="email" value={form.email} onChange={handleChange('email')} required />
        <div className="grid gap-4 md:grid-cols-2">
          <Input label="Password" type="password" value={form.password} onChange={handleChange('password')} required />
          <Input label="Confirm Password" type="password" value={form.confirm} onChange={handleChange('confirm')} required />
        </div>
        {error ? <p className="text-sm text-[#f84464]">{error}</p> : null}
        <Button type="submit" className="w-full">Sign up and book</Button>
      </form>
      <div className="mt-6 text-center text-sm text-white/70">
        Already a member? <button type="button" onClick={() => navigate('/login')} className="text-[#f84464] hover:text-[#ff7b9b]">Login</button>
      </div>
    </motion.div>
  );
}
