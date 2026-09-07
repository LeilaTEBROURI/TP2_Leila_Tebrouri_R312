# Astro × Tailwind × Observable Plot — Palmer Penguins

Projet réalisé pour les TP1 et TP2 de **Développement Front et Intégration**, sur le thème « Usage de Plot dans différents frameworks », à partir de la base [`ppierre/base-astro-tw-plot`](https://github.com/ppierre/base-astro-tw-plot).

## Auteur

- **Nom Prénom :** Leila Tebrouri — MMI2 B1
- **Site Netlify :** À COMPLÉTER

## Fonctionnalités

- projet Astro avec rendu statique ;
- mise en forme avec Tailwind CSS 4 ;
- composant réutilisable `PlotFigure.astro` rendu côté serveur avec JSDOM ;
- composant `GraphicSpecies.astro` partagé entre les pages Adelie, Gentoo et Chinstrap ;
- visualisations du jeu de données Palmer Penguins avec Observable Plot ;
- trois modes de navigation : pages séparées, iframe et slider horizontal à ancres ;
- détection du graphique actif avec `IntersectionObserver` et styles Tailwind conditionnés par `.active` ;
- JSON allégé aux colonnes réellement utilisées ;
- titres, légendes, descriptions et libellés pour l’accessibilité ;
- configuration de déploiement statique Netlify (`@astrojs/netlify` est installé conformément au sujet).

## Installation

```bash
npm install
npm run dev
```

Le site est ensuite disponible à l’adresse indiquée dans le terminal (généralement `http://localhost:4321`).

## Vérification et production

```bash
npm run build
npm run preview
```

## Pages du TP2

- `/species/Adelie`, `/species/Gentoo` et `/species/Chinstrap` : une page par graphique avec menu partagé ;
- `/iframe` : chargement des trois pages dans une iframe unique ;
- `/slider` : trois graphiques dans un slider CSS piloté par des ancres, avec entrée active observée en JavaScript.

## Déploiement

1. Publier ce dossier dans un dépôt GitHub.
2. Dans Netlify, choisir **Add new site → Import an existing project**.
3. Sélectionner le dépôt GitHub. Netlify utilisera `npm run build` et publiera `dist` grâce à `netlify.toml`. Le site étant entièrement statique, aucune Edge Function n’est nécessaire.
4. Reporter l’URL obtenue dans la section Auteur de ce fichier.

## Accessibilité

Chaque graphique possède un titre visible, une description associée et un libellé accessible sur le SVG. Les couleurs sont doublées par la forme des points dans le graphique principal. Une vérification finale peut être faite dans Chrome avec Lighthouse et l’arborescence d’accessibilité.

## Données

Les données Palmer Penguins proviennent de Kristen Gorman et de la Palmer Station LTER. Le fichier utilisé ne conserve que les colonnes utiles aux graphiques.
