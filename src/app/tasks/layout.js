import "@/styles/globals.css";


export default function PublicLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-gray-100 min-h-screen">{children}</body>
    </html>
  );
}
