export default function GuestSpacePage({ params }: { params: { pass: string } }) {
  return (
    <main className="min-h-screen bg-stone-50 p-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.2em] text-rose-700">Espace invité</p>
          <h1 className="mt-2 text-4xl text-stone-800">Bonjour Brèche Williams</h1>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {[
            'Mon invitation',
            'Mes photos',
            'Programme',
            'Livre d&apos;or',
          ].map((item) => (
            <div key={item} className="card-surface p-5">
              <p className="text-xl text-stone-800">{item}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 card-surface p-6">
          <h2 className="text-2xl text-stone-800">Mes photos</h2>
          <p className="mt-3 text-stone-600">127 photos disponibles</p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="h-40 rounded-2xl bg-gradient-to-br from-rose-100 via-white to-stone-100" />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
