import Link from 'next/link';

const highlights = [
  'Invitation numérique',
  'Galerie privée',
  'Espace invité',
  'Dashboard photographe',
  'Gestion des invités',
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-stone-800">
      <header className="border-b border-rose-100 bg-white/80 backdrop-blur-sm">
        <div className="container-shell flex items-center justify-between py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-100 text-lg text-rose-700">W</div>
            <div>
              <p className="font-serif text-2xl tracking-wide text-rose-800">WEDDINGLY</p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-stone-600 md:flex">
            <Link href="#features">Fonctionnalités</Link>
            <Link href="#experience">Expérience</Link>
            <Link href="#pricing">Tarifs</Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/login" className="btn-secondary">
              Connexion
            </Link>
            <Link href="/dashboard" className="btn-primary">
              Créer mon mariage
            </Link>
          </div>
        </div>
      </header>

      <section className="container-shell grid items-center gap-10 py-20 md:grid-cols-2 md:py-28">
        <div>
          <span className="mb-4 inline-flex rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-rose-700">
            Premium wedding platform
          </span>
          <h1 className="max-w-xl text-5xl leading-tight text-stone-800 md:text-6xl">
            Célébrez l&apos;amour.<br />
            Partagez chaque instant.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-stone-600">
            Créez votre espace de mariage, envoyez vos invitations personnalisées et retrouvez tous vos souvenirs au même endroit.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/dashboard" className="btn-primary">
              Créer mon mariage
            </Link>
            <Link href="/w/marie-jean" className="btn-secondary">
              Voir une démonstration
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-stone-500">
            <div><span className="font-semibold text-stone-800">500</span> invités</div>
            <div><span className="font-semibold text-stone-800">10k</span> photos</div>
            <div><span className="font-semibold text-stone-800">24/7</span> accès</div>
          </div>
        </div>

        <div className="card-surface overflow-hidden p-4">
          <div className="rounded-2xl border border-rose-100 bg-gradient-to-br from-white via-rose-50 to-white p-6">
            <div className="grid gap-4 md:grid-cols-[1.3fr_0.7fr]">
              <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-rose-100">
                <div className="mb-4 flex items-center justify-between text-xs text-stone-500">
                  <span>Marie &amp; Jean</span>
                  <span>12 déc. 2026</span>
                </div>
                <div className="rounded-2xl bg-gradient-to-br from-rose-100 via-white to-rose-50 p-5">
                  <p className="font-serif text-3xl text-stone-800">Vous êtes invité</p>
                  <p className="mt-6 text-sm text-stone-600">Brèche Williams</p>
                  <p className="mt-2 text-sm text-stone-500">Code invitation : WED-2026-0047</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl bg-rose-50 p-4">
                  <div className="text-xs uppercase tracking-[0.2em] text-rose-700">RSVP</div>
                  <div className="mt-3 text-3xl font-semibold text-stone-800">184</div>
                </div>
                <div className="rounded-2xl bg-stone-50 p-4">
                  <div className="text-xs uppercase tracking-[0.2em] text-stone-500">Photos</div>
                  <div className="mt-3 text-3xl font-semibold text-stone-800">3245</div>
                </div>
              </div>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item} className="rounded-xl border border-rose-100 bg-white px-3 py-3 text-sm text-stone-600 shadow-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="bg-stone-50 py-20">
        <div className="container-shell">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-rose-700">Fonctionnalités</p>
            <h2 className="mt-4 text-4xl text-stone-800">Une expérience complète du premier contact au souvenir.</h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              ['Invitations personnalisées', 'Créez un lien unique, générez des QR codes et adaptez le design à votre mariage.'],
              ['Gestion d&apos;invitations et RSVP', 'Suivez les confirmations, les absences et les statuts en temps réel.'],
              ['Galerie photo premium', 'Publiez, organiser, associer et partager les meilleurs moments avec les invités.'],
            ].map(([title, text]) => (
              <article key={title} className="card-surface p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-rose-100 text-rose-700">✦</div>
                <h3 className="text-2xl text-stone-800">{title}</h3>
                <p className="mt-3 text-stone-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
