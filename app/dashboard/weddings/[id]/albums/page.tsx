const albums = ['Préparatifs', 'Cérémonie', 'Famille', 'Photos de groupe', 'Réception', 'Soirée'];

export default function AlbumsPage() {
  return (
    <main className="min-h-screen bg-stone-50 p-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-rose-700">Albums</p>
            <h1 className="mt-2 text-4xl text-stone-800">Albums du mariage</h1>
          </div>
          <button className="btn-primary">Créer un album</button>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {albums.map((album) => (
            <div key={album} className="card-surface p-5">
              <div className="mb-4 h-40 rounded-2xl bg-gradient-to-br from-rose-100 via-white to-stone-100" />
              <p className="text-xl text-stone-800">{album}</p>
              <p className="mt-2 text-sm text-stone-500">254 photos</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
