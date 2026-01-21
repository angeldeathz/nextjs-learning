import { Product } from '@/interfaces/product';

const API_URL = process.env.API_URL;

export const productService = {
  getAll: async (): Promise<Product[]> => {
    const res = await fetch(`${API_URL}/products`, {
      // En Next.js puedes configurar el cache aquí
      next: { revalidate: 3600 } // Revalida los datos cada hora
    });
    if (!res.ok) throw new Error('Error al obtener los productos');

    return res.json();
  },
};