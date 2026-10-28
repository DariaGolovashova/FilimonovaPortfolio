'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/src/lib/supabase/client';

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setError('');
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError('Неправильний email або пароль');
      setLoading(false);
      return;
    }

    router.replace('/admin');
  };

  return (
    <main>
      <h1>Photographer Login</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Log in'}
        </button>

        {error && <p>{error}</p>}
      </form>
    </main>
  );
}
