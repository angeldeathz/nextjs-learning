'use client';

import { deleteCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = () => {
    deleteCookie('isLoggedIn');
    router.push('/');
    router.refresh();
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors"
    >
      Cerrar Sesión
    </button>
  );
}