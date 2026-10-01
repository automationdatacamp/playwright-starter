# Playwright starter — tests web et API en TypeScript

Projet d'exemple pour débuter l'automatisation des tests avec [Playwright](https://playwright.dev) :

- **tests web** sur l'application de démonstration TodoMVC (`tests/todo.spec.ts`) ;
- **tests d'API** sur JSONPlaceholder (`tests/api.spec.ts`) ;
- **intégration continue** avec GitHub Actions (`.github/workflows/playwright.yml`), rapport HTML en artefact.

## Lancer les tests

```sh
npm ci
npx playwright install chromium
npm test          # exécute les tests
npm run report    # ouvre le rapport HTML
```

## Aller plus loin

Ce dépôt est proposé par [AutomationDataCamp](https://www.automationdatacamp.com), organisme de formation en ligne au test logiciel.

- [Formation Testeur QA Automatisation & IA](https://www.automationdatacamp.com/formation-qa-adc) : 12 semaines, du test manuel à Playwright, aux tests d'API et à l'IA appliquée au test.
- [Formation Playwright certifiante](https://www.automationdatacamp.com/formation-playwright-certifiante) : 40 h de pratique.
- [Formations weekend](https://www.automationdatacamp.com/formation-weekend) : 2 jours sur un outil précis.

Licence MIT.
