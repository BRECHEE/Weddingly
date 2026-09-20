const photos = ['Cérémonie', 'Famille', 'Amis', 'Réception'];

export default function PhotosPage() {
  return (
    <main className="min-h-screen bg-stone-50 p-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-rose-700">Photos</p>
            <h1 className="mt-2 text-4xl text-stone-800">Galerie</h1>
          </div>
          <button className="btn-primary">Importer des photos</button>
        </div>

        <div className="mb-6 flex flex-wrap gap-3">
          {photos.map((tag) => (
            <button key={tag} className="rounded-full bg-white px-3 py-2 text-sm text-stone-600 shadow-sm ring-1 ring-rose-100">{tag}</button>
          ))}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="card-surface overflow-hidden">
              <div className="h-52 bg-gradient-to-br from-rose-100 via-stone-50 to-white" />
              <div className="p-4">
                <p className="text-sm text-stone-600">Photo {index + 1}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
