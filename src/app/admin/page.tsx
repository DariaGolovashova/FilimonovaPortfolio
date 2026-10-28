import AdminGuard from '@/src/components/AdminGuard/AdminGuard';
import AdminUpload from '@/src/components/AdminUpload/AdminUpload';

export default function AdminPage() {
  return (
    <AdminGuard>
      <main>
        <h1>Admin</h1>
        <p>Photographer dashboard</p>

        <AdminUpload />
      </main>
    </AdminGuard>
  );
}
