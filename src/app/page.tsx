'use client';
import CodeNovaLanding from '../components/CodeNova';

// NOTA: La metadata se maneja en layout.tsx porque este es un Client Component
// Si necesitas metadata específica para esta página, créala como Server Component

export default function HomePage() {
  return (
    <main>
      <CodeNovaLanding />
    </main>
  );
}