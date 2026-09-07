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
- deux modes de navigation : pages séparées et slider horizontal à ancres ;
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
- `/autres-graphiques` : accès aux exemples Régression et Waffle ;
- `/regression/[cylinders]` et `/waffle/[topic]` : pages générées avec `getStaticPaths()` pour les filtres voitures et sondages ;
- `/slider` : trois graphiques dans un slider CSS piloté par des ancres, avec entrée active observée en JavaScript.

## Déploiement

1. Publier ce dossier dans un dépôt GitHub.
2. Dans Netlify, choisir **Add new site → Import an existing project**.
3. Sélectionner le dépôt GitHub. Netlify utilisera `npm run build` et publiera `dist` grâce à `netlify.toml`. Le site étant entièrement statique, aucune Edge Function n’est nécessaire.
4. Fournir l’URL obtenue dans le rendu Moodle ; son ajout dans ce README est facultatif.

## Accessibilité

Chaque graphique possède un titre visible, une description associée et un libellé accessible sur le SVG. Les couleurs sont doublées par la forme des points dans le graphique principal. Une vérification finale peut être faite dans Chrome avec Lighthouse et l’arborescence d’accessibilité.

## Données

Les données Palmer Penguins proviennent de Kristen Gorman et de la Palmer Station LTER. Le fichier utilisé ne conserve que les colonnes utiles aux graphiques.
