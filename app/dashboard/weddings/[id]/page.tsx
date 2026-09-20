import Link from 'next/link';

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function WeddingPage({ params }: PageProps) {
  const { id } = await params;

  return (
    <main className="min-h-screen bg-stone-50 p-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-rose-700">
              Détails du mariage
            </p>
            <h1 className="mt-2 text-4xl text-stone-800">Mariage #{id}</h1>
          </div>
          <Link href="/dashboard/weddings" className="btn-secondary">
            Retour aux mariages
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="card-surface p-5">
            <p className="text-sm text-stone-500">ID du mariage</p>
            <p className="mt-2 text-xl font-semibold text-stone-800">{id}</p>
          </div>
        </div>
      </div>
    </main>
  );
}