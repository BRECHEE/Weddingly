const groups = ['Famille Marie', 'Famille Jean', 'Amis Marie', 'Amis Jean', 'Collègues', 'Témoins'];

export default function GroupsPage() {
  return (
    <main className="min-h-screen bg-stone-50 p-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-rose-700">Groupes</p>
            <h1 className="mt-2 text-4xl text-stone-800">Groupes d&apos;invités</h1>
          </div>
          <button className="btn-primary">Créer un groupe</button>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {groups.map((group) => (
            <div key={group} className="card-surface p-5">
              <p className="text-lg font-medium text-stone-800">{group}</p>
              <p className="mt-3 text-sm text-stone-500">42 invités</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
