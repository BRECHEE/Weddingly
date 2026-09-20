export default function PhotographerPage() {
  return (
    <main className="min-h-screen bg-stone-50 p-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-rose-700">Photographe</p>
            <h1 className="mt-2 text-4xl text-stone-800">Dashboard photographe</h1>
          </div>
          <button className="btn-primary">Importer des photos</button>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {[
            ['Photos', '3245'],
            ['Albums', '8'],
            ['Non classées', '274'],
            ['Associées', '2971'],
          ].map(([label, value]) => (
            <div key={label} className="card-surface p-5">
              <p className="text-sm text-stone-500">{label}</p>
              <p className="mt-3 text-3xl font-semibold text-stone-800">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
