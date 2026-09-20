export default function WeddingPublicPage({ params }: { params: { slug: string } }) {
  return (
    <main className="min-h-screen bg-white text-stone-800">
      <section className="relative h-[520px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-rose-200/70 to-rose-50" />
        <div className="relative container-shell flex h-full items-end pb-14">
          <div className="max-w-xl rounded-3xl border border-white/70 bg-white/60 p-8 shadow-soft backdrop-blur-sm">
            <p className="text-sm uppercase tracking-[0.2em] text-rose-700">Mariage</p>
            <h1 className="mt-3 font-serif text-5xl text-stone-800">Marie &amp; Jean</h1>
            <p className="mt-4 text-stone-600">12 décembre 2026 · Salle des Fêtes · Brazzaville</p>
            <div className="mt-6 flex gap-4 text-sm text-stone-600">
              <span>Compte à rebours</span>
              <span>145 jours</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container-shell py-12">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-8">
            <section className="card-surface p-6">
              <h2 className="text-3xl text-stone-800">Bienvenue au mariage de Marie &amp; Jean ❤️</h2>
              <p className="mt-4 text-stone-600">Entrez votre nom ou votre code d&apos;invitation.</p>
              <div className="mt-6 space-y-4">
                <input className="w-full rounded-xl border border-rose-100 bg-stone-50 px-4 py-3" placeholder="Votre nom" />
                <button className="btn-primary w-full">Continuer</button>
                <button className="btn-secondary w-full">Utiliser mon code d&apos;invitation</button>
              </div>
            </section>

            <section className="card-surface p-6">
              <h2 className="text-3xl text-stone-800">Programme</h2>
              <div className="mt-6 space-y-5">
                {['09:00 · Cérémonie', '12:00 · Cocktail', '15:00 · Photos de groupe', '18:00 · Réception', '21:30 · Soirée'].map((item) => (
                  <div key={item} className="border-b border-rose-100 pb-3 text-stone-600 last:border-b-0 last:pb-0">{item}</div>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-8">
            <section className="card-surface p-6">
              <h2 className="text-3xl text-stone-800">Lieu</h2>
              <p className="mt-3 text-stone-600">Salle des Fêtes</p>
              <p className="mt-2 text-stone-500">Brazzaville, Congo</p>
            </section>

            <section className="card-surface p-6">
              <h2 className="text-3xl text-stone-800">RSVP</h2>
              <div className="mt-4 grid gap-3">
                <button className="btn-primary">Je serai présent</button>
                <button className="btn-secondary">Je ne pourrai pas venir</button>
                <button className="btn-secondary">Je ne sais pas encore</button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
