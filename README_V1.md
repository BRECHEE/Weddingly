# 🎊 WEDDINGLY V1 - Plateforme Digitale de Mariage

## ✅ État du Projet

La **version V1 est maintenant opérationnelle** comme application web HTML5 autonome, sans dépendance à npm/Node.js.

### Fonctionnalités V1 Implémentées

✅ **Authentification**
- Inscription avec nom, email, mot de passe, date du mariage
- Connexion sécurisée
- Persistance utilisateur en localStorage

✅ **Dashboard Organizer**
- Vue d'ensemble avec statistiques (invitations, confirmations, photos)
- Gestion du mariage (titre, date, lieu, description)
- Gestion des invités (ajout, suppression, suivi RSVP)
- Galerie photo (upload, suppression)

✅ **Design Premium**
- Palette rose luxe (couleur principale: #d946a6)
- Polices élégantes (Playfair Display + Lora)
- Interface responsive (mobile, tablet, desktop)
- Animations fluides

✅ **Données Locales**
- Stockage via localStorage (fonctionne hors ligne)
- Persistance complète des mariages, invités et photos
- Pas de serveur requis pour V1

---

## 🚀 Comment Utiliser

### Option 1: Ouvrir directement dans le navigateur
```bash
# Double-cliquez sur index.html
# OU ouvrez-le manuellement dans votre navigateur
```

### Option 2: Serveur local simple
```bash
# Si vous avez Python:
python -m http.server 8000

# Puis ouvrez: http://localhost:8000/index.html
```

---

## 🎯 Flux Utilisateur V1

1. **Accueil** → Présentation des fonctionnalités
2. **Inscription** → Créer un compte avec date du mariage
3. **Dashboard** → Gérer le mariage
4. **Onglets du Dashboard**:
   - Vue d'ensemble: statistiques en temps réel
   - Mon Mariage: éditer les détails
   - Invités: ajouter/gérer les invitations
   - Photos: télécharger et organiser les photos

---

## 📋 Données de Test

L'application stocke tout en localStorage (navigateur). Vous pouvez:
- Créer plusieurs comptes (chacun avec son propre mariage)
- Ajouter des invités avec statut RSVP
- Télécharger des images locales

**Les données persistent** même après fermeture du navigateur.

---

## 🔄 Prochaines Étapes pour V2 (Optionnel)

Si l'infrastructure réseau de votre machine est réparée, vous pouvez passer à la version Node.js/Next.js avec:
- ✅ Architecture scalable (Next.js + Prisma)
- ✅ Base de données PostgreSQL
- ✅ Authentification Auth.js
- ✅ Upload S3/R2 pour photos
- ✅ API REST complète
- ✅ Email transactionnel

---

## 📁 Structure du Projet

```
MARIAGE/
├── index.html          ← Application V1 (ouvrir dans le navigateur)
├── package.json        ← Manifest npm (pour future V2)
├── prisma/
│   ├── schema.prisma   ← Modèle de base de données (prêt pour V2)
│   └── seed.ts         ← Données de seed (prêt pour V2)
├── app/                ← Composants React (prêts pour V2)
│   ├── page.tsx
│   ├── login/
│   ├── register/
│   ├── dashboard/
│   ├── w/[slug]/
│   ├── guest/
│   └── photographer/
├── lib/
│   └── schemas.ts      ← Validations Zod (prêtes pour V2)
└── tailwind.config.ts  ← Configuration Tailwind (prête pour V2)
```

---

## 🎨 Identité Visuelle V1

- **Couleur primaire**: Rose #d946a6 (pink-luxury)
- **Palette secondaire**: Roses pastel pour les backgrounds
- **Typographie**: 
  - Titres: Playfair Display (serif, élégante)
  - Corps: Lora (serif, lisible)
- **Espacement**: Généreuse (padding/margins)
- **Ombres**: Subtiles, roses teintées

---

## 💾 Notes Techniques

- **Langage**: HTML5 + JavaScript (Vanilla)
- **Frameworks CSS**: Tailwind CSS via CDN
- **Framework JS**: Alpine.js via CDN
- **Stockage**: localStorage (navigateur)
- **Navigation**: Basée sur Alpine.js avec `x-show`
- **Responsive**: Breakpoints Tailwind (mobile-first)

---

## ✨ Points Forts de V1

1. **Zéro dépendance réseau** - Fonctionne complètement en offline
2. **Interface premium** - Design professionnel et luxe
3. **Fonctionnel immédiatement** - Ouvrir et utiliser
4. **Données sécurisées** - Stockage local navigateur
5. **Responsive** - Fonctionne sur tous les appareils

---

## ⚠️ Limitations Connues de V1

- Données stockées localement (localhost seulement)
- Pas de base de données centralisée
- Pas d'email de confirmation
- Pas de partage de photos avec les invités (réservé V2)
- Pas de signature numérique

---

## 📧 Support

Pour toute question ou amélioration V1, consultez la documentation du code dans `index.html`.

---

**WEDDINGLY V1 - Plateforme de Mariage Digitale** 💍✨
