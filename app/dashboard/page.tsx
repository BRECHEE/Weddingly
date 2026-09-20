import Link from 'next/link';

const stats = [
  { label: 'Invités', value: '512' },
  { label: 'Confirmés', value: '368' },
  { label: 'RSVP', value: '78%' },
  { label: 'Photos', value: '3 245' },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-stone-50 p-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-rose-700">Dashboard</p>
            <h1 className="mt-2 text-4xl text-stone-800">Vue générale</h1>
          </div>
          <Link href="/dashboard/weddings" className="btn-primary">Gérer mariages</Link>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="card-surface p-5">
              <p className="text-sm text-stone-500">{stat.label}</p>
              <p className="mt-3 text-3xl font-semibold text-stone-800">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="card-surface p-6">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-2xl text-stone-800">Mariages</h2>
              <Link href="/dashboard/weddings" className="text-sm font-medium text-rose-700">Voir tous</Link>
            </div>
            <div className="space-y-4">
              {[
                ['Marie & Jean', '12 décembre 2026', '512 invités'],
                ['Sarah & David', '18 janvier 2027', '186 invités'],
              ].map(([name, date, guests]) => (
                <div key={name} className="flex items-center justify-between rounded-2xl border border-rose-100 bg-rose-50/50 p-4">
                  <div>
                    <p className="text-lg font-medium text-stone-800">{name}</p>
                    <p className="text-sm text-stone-500">{date}</p>
                  </div>
                  <span className="rounded-full bg-white px-3 py-1 text-sm text-rose-700">{guests}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="card-surface p-6">
            <h2 className="text-2xl text-stone-800">Actions rapides</h2>
            <div className="mt-5 space-y-3">
              <Link href="/dashboard/weddings/new" className="btn-secondary w-full justify-center">Créer un mariage</Link>
              <Link href="/dashboard/weddings/123/guests" className="btn-secondary w-full justify-center">Gérer les invités</Link>
              <Link href="/dashboard/weddings/123/photos" className="btn-secondary w-full justify-center">Voir les photos</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}