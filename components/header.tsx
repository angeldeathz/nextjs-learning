import LogoutButton from "./logout-button";

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">
          {title}
        </h1>
        <LogoutButton />
      </div>
      <p className="mt-2 text-gray-600">¡Bienvenido! Has iniciado sesión correctamente.</p>
    </div>
  );
}