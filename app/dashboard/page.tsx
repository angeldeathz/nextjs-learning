'use client';

import { deleteCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const router = useRouter();

  const handleLogout = () => {
    deleteCookie('isLoggedIn');
    router.push('/');
  };

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900">Panel de Control</h1>
          <button
            onClick={handleLogout}
            className="ml-4 rounded-md bg-red-600 px-4 py-2 text-white font-semibold hover:bg-red-700 transition-colors shadow-sm"
          >
            Cerrar sesión
          </button>
        </div>
        <p className="mt-2 text-gray-600">¡Bienvenido! Has iniciado sesión correctamente.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-semibold text-blue-600">Tareas</h3>
            <p className="text-2xl font-bold text-gray-600">12</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-semibold text-green-600">Completadas</h3>
            <p className="text-2xl font-bold text-gray-600">8</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-semibold text-purple-600">Pendientes</h3>
            <p className="text-2xl font-bold text-gray-600">4</p>
          </div>
        </div>


      </div>
    </main>
  );
}