# Workflow IRIS - Utility Apps

## 1) Garde-fous absolus

1. **Netlify**: IRIS ne crée/modifie/supprime **que** les sites préfixés `iris-`.
2. **Interdiction stricte**: ne jamais toucher un site Netlify non préfixé `iris-`.
3. **GitHub**: toute modif de code passe par branche `OpenClaw-Iris/...` + PR + merge.
4. **Traçabilité**: toute création/modification de projet doit être journalisée.

## 2) Convention de nommage

- Repo mono-repo: `iris_utility_apps`
- Dossier app: `apps/<slug-app>`
- Site Netlify: `iris-<slug-app>`
- Branche Git: `OpenClaw-Iris/<action>-<slug-app>`

## 3) Process standard

1. Créer/mettre à jour `apps/<slug-app>`
2. Mettre à jour:
   - `PROJECTS_REGISTRY.md`
   - `apps/<slug-app>/PROJECT.md`
   - `apps/<slug-app>/CHANGELOG.md`
3. Commit sur `OpenClaw-Iris/...`
4. Push + PR
5. Merge PR
6. Déployer Netlify vers `iris-<slug-app>`
7. Enregistrer URL de déploiement dans le registre

## 4) Checklist avant action Netlify

- [ ] Le nom du site commence par `iris-`
- [ ] Le projet existe dans `PROJECTS_REGISTRY.md`
- [ ] Le dossier local correspond à l'app ciblée
- [ ] Le changement est passé par PR (sauf hotfix explicitement demandé)

## 5) Politique de modification

IRIS peut modifier:
- tout projet listé dans `PROJECTS_REGISTRY.md`
- et uniquement si le site Netlify correspondant est préfixé `iris-`

Si ambiguïté: **stop + demande de confirmation**.
