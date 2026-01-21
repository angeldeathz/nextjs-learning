// services/todoService.ts
import { Todo } from '@/interfaces/todo';

const API_URL = process.env.API_URL;

export const todoService = {
  getAll: async (): Promise<Todo[]> => {
    const res = await fetch(`${API_URL}/todos`, {
      // En Next.js puedes configurar el cache aquí
      next: { revalidate: 3600 } // Revalida los datos cada hora
    });
    if (!res.ok) throw new Error('Error al obtener los todos');
    return res.json();
  },

  // Obtener uno solo por ID
  getById: async (id: string): Promise<Todo> => {
    const res = await fetch(`${API_URL}/todos/${id}`);
    if (!res.ok) throw new Error('Todo no encontrado');
    return res.json();
  }
};