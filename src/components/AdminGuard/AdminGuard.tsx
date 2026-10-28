'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/src/lib/supabase/client';

type AdminGuardProps = {
  children: React.ReactNode;
};

const AdminGuard = ({ children }: AdminGuardProps) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.replace('/admin/login');
        return;
      }

      setLoading(false);
    };

    checkUser();
  }, [router]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return children;
};

export default AdminGuard;
