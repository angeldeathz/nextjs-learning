/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { AgGridReact } from 'ag-grid-react';
import { AllCommunityModule, ModuleRegistry, themeQuartz } from 'ag-grid-community';
import { Product } from '@/interfaces/product';
import { useState } from 'react';

// 1. Registramos los módulos (esto se mantiene igual)
ModuleRegistry.registerModules([AllCommunityModule]);

export default function AgGridTable({ data }: { data: Product[] }) {
  const [columnDefs] = useState([
    { field: 'id', headerName: 'ID', width: 80 },
    { field: 'title', headerName: 'Producto', flex: 1, filter: true },
    {
      field: 'price',
      headerName: 'Precio',
      flex: 1,
      filter: true,
    },
    {
      field: 'category',
      headerName: 'Categoría',
      flex: 1,
      filter: true
    },
    {
      field: 'rating.rate',
      headerName: 'Calificación',
      flex: 1,
      filter: true
    },
    {
      field: 'rating.count',
      headerName: 'Cantidad de calificaciones',
      flex: 1,
      filter: true
    }
  ]);

  const onSortChanged = () => {
    console.log('Sort changed');
  };

  return (
    <div className="w-full h-[450px] shadow-sm border border-gray-200 rounded-lg">
      <AgGridReact
        rowData={data}
        columnDefs={columnDefs as any}
        theme={themeQuartz}
        pagination={true}
        paginationPageSize={10}
        paginationPageSizeSelector={[10, 20, 50]}
        onSortChanged={onSortChanged}
      />
    </div>
  );
}