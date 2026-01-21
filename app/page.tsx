'use client';

import { setCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LoginPage() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter(); // 2. Inicializamos el router

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (user === 'admin' && password === '123') {
      // Guardamos una cookie llamada 'isLoggedIn'
      setCookie('isLoggedIn', 'true');
      router.push('/dashboard');
    } else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        <h1 className="text-center text-2xl font-bold text-gray-800">Bienvenido</h1>
        <p className="mb-6 text-center text-gray-600">Ingresa a tu cuenta</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Usuario</label>
            <input
              type="text"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500 outline-none transition-all text-gray-600"
              placeholder="Ej: juan_perez"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500 outline-none transition-all text-gray-600"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-blue-600 py-2 text-white font-semibold hover:bg-blue-700 transition-colors"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </main>
  );
}