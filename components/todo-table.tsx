/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { AgGridReact } from 'ag-grid-react';
import { AllCommunityModule, ModuleRegistry, themeQuartz } from 'ag-grid-community'; // Importamos themeQuartz
import { Todo } from '@/interfaces/todo';
import { useState } from 'react';

// 1. Registramos los módulos (esto se mantiene igual)
ModuleRegistry.registerModules([AllCommunityModule]);

export default function TodoTable({ data }: { data: Todo[] }) {
  const [columnDefs] = useState([
    { field: 'id', headerName: 'ID', width: 80 },
    { field: 'title', headerName: 'Tarea', flex: 1, filter: true },
    {
      field: 'completed',
      headerName: 'Estado',
      cellRenderer: (p: any) => p.value ? '✅ Completado' : '⏳ Pendiente',
      width: 150
    }
  ]);

  return (
    // 2. Ya no necesitas clases como "ag-theme-alpine" aquí
    <div className="w-full h-[450px] shadow-sm border border-gray-200 rounded-lg">
      <AgGridReact
        rowData={data}
        columnDefs={columnDefs as any}
        theme={themeQuartz} // 3. Pasamos el tema directamente aquí
        pagination={true}
        paginationPageSize={10}
        paginationPageSizeSelector={[10, 20, 50]}
      />
    </div>
  );
}