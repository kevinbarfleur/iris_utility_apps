# Utility Apps (Mono-repo)

Ce repo sert à héberger des mini-apps utilitaires déployables rapidement sur Netlify.

## Workflow cible

1. Créer une app dans `apps/<nom-app>`
2. Commit sur une branche dédiée (`OpenClaw-Iris/...`)
3. Ouvrir une PR
4. Review
5. Merge
6. Déployer sur Netlify

## Prérequis

- GitHub auth OK (déjà configuré via `GH_TOKEN`)
- Netlify auth token à fournir (`NETLIFY_AUTH_TOKEN`)

## Commandes utiles

```bash
# Depuis la racine du monorepo
npm run nl -- --version
npm run nl -- status

# Lier un site existant (dans le dossier de l'app)
npm run nl -- link

# Déployer un preview
npm run nl -- deploy --dir .

# Déployer en production
npm run nl -- deploy --prod --dir .
```

## Structure recommandée

```text
apps/
  app-1/
  app-2/
```
