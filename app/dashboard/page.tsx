import Header from '../../components/header';
import TodoTable from '../../components/todo-table';
import { todoService } from '../../services/todo-service';

export default async function DashboardPage() {
  const todos = await todoService.getAll();

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <Header title='Panel de Control' />

      <div className="max-w-4xl mx-auto">
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

      <div className="space-y-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Gestión de Tareas</h2>
          {/* Pasamos los datos del servidor al componente de cliente */}
          <TodoTable data={todos} />
        </div>
      </div>
    </main>
  );
}