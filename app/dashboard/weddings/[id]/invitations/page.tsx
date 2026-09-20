export default function InvitationsPage() {
  return (
    <main className="min-h-screen bg-stone-50 p-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-rose-700">Invitations</p>
            <h1 className="mt-2 text-4xl text-stone-800">Modèles et QR codes</h1>
          </div>
          <button className="btn-primary">Générer invitations</button>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {['CLASSIC', 'MODERN', 'ROMANTIC'].map((template) => (
            <div key={template} className="card-surface p-6">
              <div className="mb-4 flex h-40 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-50 to-white text-center">
                <div>
                  <p className="font-serif text-3xl text-stone-800">Marie &amp; Jean</p>
                  <p className="mt-2 text-sm text-stone-500">{template}</p>
                </div>
              </div>
              <button className="btn-secondary w-full">Choisir ce modèle</button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
