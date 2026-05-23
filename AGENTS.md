# AGENTS.md - Site personnel de Grégory Wychowaniec

Ce dépôt contient le site personnel de Grégory Wychowaniec. Le site est généré avec Astro en mode statique et déployé via GitHub Pages.

Le site doit rester simple, rapide, lisible, bien référencé et facile à maintenir. Il présente en priorité un profil d'ingénieur cybersécurité : parcours professionnel, formation, compétences techniques, passions et contact. L'intelligence artificielle est une orientation progressive en cours, à présenter comme un complément au parcours cybersécurité et non comme une activité principale déjà établie.

## Objectif du site

Le site sert de présence personnelle et professionnelle courte. Il doit permettre de comprendre rapidement :

- qui est Grégory Wychowaniec ;
- son profil d'ingénieur cybersécurité ;
- son expérience SOC et son approche de l'analyse technique ;
- ses compétences, outils et sujets de veille ;
- son parcours de formation ;
- ses centres d'intérêt ;
- ses moyens de contact et liens professionnels ;
- ses expérimentations techniques publiées dans le blog.

## État actuel

- Stack active : Astro 6 en génération statique.
- Déploiement : GitHub Pages via `.github/workflows/astro.yaml`.
- Sortie générée : `dist/`.
- Assets publics : `static/`.
- Navigation principale : Accueil et Blog.

## Structure du site

Le site doit conserver une structure courte :

- `/` : page d'accueil unique ;
- `/blog` : liste des articles ;
- `/blog/<slug>` : page d'article ;
- `/rss.xml` : flux RSS du blog ;
- `/robots.txt` : règles d'indexation ;
- `sitemap-index.xml` et sitemap généré par Astro.

Ne pas réintroduire de pages séparées de type offre IA, méthode, cas d'usage, expertise, parcours ou contact sans demande explicite. Ces contenus doivent rester intégrés à la page d'accueil tant que la structure cible reste Accueil + Blog.

## Positionnement éditorial

Le positionnement principal du site est :

- ingénieur cybersécurité ;
- expérience SOC ;
- analyse technique ;
- automatisation ;
- veille ;
- formation informatique et cybersécurité ;
- passions personnelles.

L'IA doit être présentée comme :

- une orientation progressive ;
- un sujet d'expérimentation ;
- un complément au socle cybersécurité ;
- un thème possible du blog.

Ne pas présenter Grégory comme expert IA établi, consultant IA principal ou vitrine professionnelle IA pour PME, sauf demande explicite de repositionnement.

Le ton doit rester :

- français ;
- professionnel ;
- personnel ;
- concret ;
- sans jargon inutile ;
- sans promesses excessives.

## Page d'accueil

La page d'accueil source est `src/pages/index.astro`.

Elle doit rester une page unique avec :

- hero : "Bienvenue, je suis Grégory" ;
- titre principal orienté ingénieur cybersécurité ;
- présentation personnelle ;
- bloc secondaire sur la transition vers l'IA ;
- compétences et outils ;
- expérience professionnelle ;
- formation ;
- centres d'intérêt ;
- contact et liens professionnels.

Les modifications de contenu doivent privilégier cette page avant de créer de nouvelles routes.

## Blog

Le blog est un journal d'expériences public.

Il peut traiter de :

- IA ;
- automatisation ;
- prompts et méthodes ;
- cybersécurité ;
- tests d'outils ;
- retours d'expérience ;
- limites observées ;
- apprentissages ;
- veille technique.

Les articles ne doivent pas être purement promotionnels. Ils doivent prouver l'expertise par l'expérimentation, la transparence et la pédagogie.

Chaque article dans `src/content/blog/` doit conserver le frontmatter suivant :

- `title` ;
- `description` ;
- `pubDate` ;
- `tags` ;
- `category` ;
- `summary`.

Les liens internes des articles ne doivent pas pointer vers des pages supprimées. Pour un lien général vers le profil, utiliser `/`. Pour un lien vers le journal, utiliser `/blog`.

## SEO et lisibilité par agents IA

Conserver au minimum :

- titres explicites ;
- descriptions uniques ;
- sitemap valide ;
- `robots.txt` clair ;
- RSS pour le blog ;
- métadonnées Open Graph et Twitter Cards ;
- structure HTML statique lisible ;
- contenu principal accessible sans JavaScript lourd ;
- JSON-LD utile, principalement `Person`, `WebSite` et `BlogPosting`.

Ne pas utiliser `ProfessionalService` ou des données structurées d'offre commerciale IA tant que le positionnement principal reste personnel/cybersécurité.

## Règles techniques

Modifier prioritairement :

- `src/pages/index.astro` pour la page d'accueil ;
- `src/pages/blog/index.astro` et `src/pages/blog/[...slug].astro` pour le blog ;
- `src/content/blog/` pour les articles ;
- `src/data/site.ts` pour les métadonnées globales et la navigation ;
- `src/layouts/BaseLayout.astro` pour le socle HTML, SEO et navigation ;
- `src/styles/global.css` pour le style ;
- `static/` pour les assets publics.

Ne pas modifier `dist/` comme source. Le considérer comme une sortie générée par Astro.

Ne pas réintroduire de dépendances lourdes sans raison explicite. Le site doit rester statique, rapide et simple à déployer.

## Commandes utiles

Installer les dépendances si nécessaire :

```powershell
npm install
```

Lancer le développement local :

```powershell
npm run dev
```

Construire le site :

```powershell
npm run build
```

Prévisualiser le build :

```powershell
npm run preview
```

## Validation attendue

Après modification significative, valider au minimum :

- `npm run build` ;
- `/` ;
- `/blog` ;
- chaque article ;
- `/rss.xml` ;
- `/robots.txt` ;
- `sitemap-index.xml` ;
- absence de liens vers les pages supprimées ;
- accents et encodage UTF-8 ;
- lisibilité du contenu principal sans JavaScript lourd.

Si un serveur preview est lancé pour validation, l'arrêter après usage.

Pour une modification documentaire seule de `AGENTS.md`, une relecture et une recherche des termes historiques supprimés suffisent.

## Hypothèses actuelles

- Le site reste en français.
- Astro 6 reste la stack active.
- Le site garde uniquement Accueil + Blog.
- Le blog sert de journal d'expériences IA et techniques.
- L'IA reste un sujet de transition et d'exploration, secondaire par rapport au parcours cybersécurité.
