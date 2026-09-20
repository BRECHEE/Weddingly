import Link from 'next/link';

export default function RegisterPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-rose-50 via-white to-stone-50 p-6">
      <div className="card-surface w-full max-w-md p-8">
        <div className="mb-8 text-center">
          <p className="font-serif text-3xl text-stone-800">Créer mon compte</p>
          <p className="mt-3 text-sm text-stone-500">Gérez vos mariages et vos invités</p>
        </div>

        <form className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="mb-2 block text-sm text-stone-600">Prénom</label>
              <input id="firstName" className="w-full rounded-xl border border-rose-100 bg-stone-50 px-4 py-3 outline-none focus:border-rose-300" />
            </div>
            <div>
              <label htmlFor="lastName" className="mb-2 block text-sm text-stone-600">Nom</label>
              <input id="lastName" className="w-full rounded-xl border border-rose-100 bg-stone-50 px-4 py-3 outline-none focus:border-rose-300" />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block text-sm text-stone-600">Email</label>
            <input id="email" type="email" className="w-full rounded-xl border border-rose-100 bg-stone-50 px-4 py-3 outline-none focus:border-rose-300" />
          </div>
          <div>
            <label htmlFor="password" className="mb-2 block text-sm text-stone-600">Mot de passe</label>
            <input id="password" type="password" className="w-full rounded-xl border border-rose-100 bg-stone-50 px-4 py-3 outline-none focus:border-rose-300" />
          </div>

          <button type="button" className="btn-primary w-full">S&apos;inscrire</button>
        </form>

        <div className="mt-6 text-center text-sm text-stone-500">
          Déjà inscrit ?{' '}
          <Link href="/login" className="font-medium text-rose-700">Se connecter</Link>
        </div>
      </div>
    </main>
  );
}
