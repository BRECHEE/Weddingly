import Link from 'next/link';

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-rose-50 via-white to-stone-50 p-6">
      <div className="card-surface w-full max-w-md p-8">
        <div className="mb-8 text-center">
          <p className="font-serif text-3xl text-stone-800">WEDDINGLY</p>
          <p className="mt-3 text-sm text-stone-500">Connexion</p>
        </div>

        <form className="space-y-5">
          <div>
            <label htmlFor="email" className="mb-2 block text-sm text-stone-600">Email</label>
            <input id="email" type="email" defaultValue="marie@weddingly.com" className="w-full rounded-xl border border-rose-100 bg-stone-50 px-4 py-3 outline-none ring-0 focus:border-rose-300" />
          </div>
          <div>
            <label htmlFor="password" className="mb-2 block text-sm text-stone-600">Mot de passe</label>
            <input id="password" type="password" defaultValue="********" className="w-full rounded-xl border border-rose-100 bg-stone-50 px-4 py-3 outline-none ring-0 focus:border-rose-300" />
          </div>

          <button type="button" className="btn-primary w-full">Se connecter</button>
        </form>

        <div className="mt-6 text-center text-sm text-stone-500">
          Pas encore de compte ?{' '}
          <Link href="/register" className="font-medium text-rose-700">Créer un compte</Link>
        </div>
      </div>
    </main>
  );
}
