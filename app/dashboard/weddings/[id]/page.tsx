import Link from 'next/link';

const tabs = ['Vue générale', 'Invités', 'Groupes', 'Invitations', 'Albums', 'Photos', 'RSVP'];

export default function WeddingDetailsPage({ params }: { params: { id: string } }) {
  return (
    <main className="min-h-screen bg-stone-50 p-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-rose-700">Mariage</p>
            <h1 className="mt-2 text-4xl text-stone-800">Marie &amp; Jean</h1>
          </div>
          <Link href={`/w/${params.id}`} className="btn-secondary">Voir la page publique</Link>
        </div>

        <div className="mb-8 flex flex-wrap gap-3">
          {tabs.map((tab) => (
            <button key={tab} className="rounded-full border border-rose-200 bg-white px-4 py-2 text-sm text-stone-600 hover:bg-rose-50">
              {tab}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="card-surface p-5">
            <p className="text-sm text-stone-500">Invités</p>
            <p className="mt-3 text-3xl font-semibold text-stone-800">512</p>
          </div>
          <div className="card-surface p-5">
            <p className="text-sm text-stone-500">Confirmés</p>
            <p className="mt-3 text-3xl font-semibold text-stone-800">368</p>
          </div>
          <div className="card-surface p-5">
            <p className="text-sm text-stone-500">Photos</p>
            <p className="mt-3 text-3xl font-semibold text-stone-800">3245</p>
          </div>
        </div>
      </div>
    </main>
  );
}
