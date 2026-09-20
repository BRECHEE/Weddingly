import Link from 'next/link';

const weddings = [
  { name: 'Marie & Jean', slug: 'marie-jean', date: '12 décembre 2026', guests: 512 },
  { name: 'Sarah & David', slug: 'sarah-david', date: '18 janvier 2027', guests: 186 },
];

export default function WeddingsPage() {
  return (
    <main className="min-h-screen bg-stone-50 p-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-rose-700">Mariages</p>
            <h1 className="mt-2 text-4xl text-stone-800">Gestion des mariages</h1>
          </div>
          <button className="btn-primary">Ajouter un mariage</button>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {weddings.map((wedding) => (
            <div key={wedding.slug} className="card-surface p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-3xl text-stone-800">{wedding.name}</h2>
                  <p className="mt-2 text-stone-500">{wedding.date}</p>
                </div>
                <span className="rounded-full bg-rose-100 px-2.5 py-1 text-xs font-medium text-rose-700">Actif</span>
              </div>

              <div className="mt-6 flex items-center justify-between text-sm text-stone-600">
                <span>{wedding.guests} invités</span>
                <Link href={`/dashboard/weddings/${wedding.slug}`} className="font-medium text-rose-700">Ouvrir</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
