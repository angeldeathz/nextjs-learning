export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900">Panel de Control</h1>
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