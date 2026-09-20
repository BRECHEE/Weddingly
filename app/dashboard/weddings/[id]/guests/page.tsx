const guests = [
  { name: 'Brèche Williams', code: 'WED-2026-0047', status: 'Confirmé', group: 'Famille Marie' },
  { name: 'Sarah Martin', code: 'WED-2026-0048', status: 'En attente', group: 'Amis' },
  { name: 'Jean Dupont', code: 'WED-2026-0049', status: 'Refus', group: 'Collègues' },
];

export default function GuestsPage() {
  return (
    <main className="min-h-screen bg-stone-50 p-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-rose-700">Invités</p>
            <h1 className="mt-2 text-4xl text-stone-800">Gestion des invités</h1>
          </div>
          <button className="btn-primary">Ajouter un invité</button>
        </div>

        <div className="card-surface overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-stone-50 text-stone-600">
                <tr>
                  <th className="px-5 py-4 font-medium">Nom</th>
                  <th className="px-5 py-4 font-medium">Code</th>
                  <th className="px-5 py-4 font-medium">Groupe</th>
                  <th className="px-5 py-4 font-medium">Statut</th>
                </tr>
              </thead>
              <tbody>
                {guests.map((guest) => (
                  <tr key={guest.code} className="border-t border-rose-100">
                    <td className="px-5 py-4 text-stone-800">{guest.name}</td>
                    <td className="px-5 py-4 text-stone-600">{guest.code}</td>
                    <td className="px-5 py-4 text-stone-600">{guest.group}</td>
                    <td className="px-5 py-4">
                      <span className="rounded-full bg-rose-100 px-2.5 py-1 text-xs font-medium text-rose-700">{guest.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
