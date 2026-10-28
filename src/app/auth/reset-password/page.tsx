'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/src/lib/supabase/client';

export default function ResetPasswordPage() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMessage('');

    if (password.length < 8) {
      setMessage('Пароль має містити щонайменше 8 символів.');
      return;
    }

    if (password !== confirmPassword) {
      setMessage('Паролі не збігаються.');
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.updateUser({ password });

    setLoading(false);

    if (error) {
      setMessage(
        'Не вдалося змінити пароль. Відкрийте посилання відновлення з листа ще раз.',
      );
      return;
    }

    setMessage('Пароль успішно встановлено. Перенаправляємо на вхід...');

    router.replace('/admin/login');
  }

  return (
    <main>
      <h1>Встановлення нового пароля</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="password">Новий пароль</label>
          <input
            id="password"
            type="password"
            autoComplete="new-password"
            minLength={8}
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="confirmPassword">Повторіть пароль</label>
          <input
            id="confirmPassword"
            type="password"
            autoComplete="new-password"
            minLength={8}
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? 'Зберігаємо...' : 'Встановити пароль'}
        </button>
      </form>

      {message && <p role="status">{message}</p>}
    </main>
  );
}
