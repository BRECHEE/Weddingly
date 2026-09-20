import Link from 'next/link';

// 1. Mise à jour de l'interface pour Next.js 15 : params est une Promise
interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function WeddingPage({ params }: PageProps) {
  // 2. Récupération asynchrone de l'id avec await
  const { id } = await params;

  return (
    <main className="min-h-screen bg-stone-50 p-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-rose-700">Détails du mariage</p>
            <h1 className="mt-2 text-4xl text-stone-800">Mariage #{id}</h1>
          </div>
          <Link href="/dashboard/weddings" className="btn-secondary">
            Retour aux mariages
          </Link>
        </div>

        {/* Reste de ton JSX / contenu de la page */}
      </div>
    </main>
  );
}