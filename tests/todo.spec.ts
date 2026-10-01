import { test, expect } from '@playwright/test';

// Application de démonstration publique maintenue par l'équipe Playwright.
const APP = 'https://demo.playwright.dev/todomvc/';

test.describe('TodoMVC', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(APP);
  });

  test('ajoute une tâche', async ({ page }) => {
    const input = page.getByPlaceholder('What needs to be done?');
    await input.fill('Écrire mon premier test Playwright');
    await input.press('Enter');
    await expect(page.getByTestId('todo-title')).toHaveText(['Écrire mon premier test Playwright']);
  });

  test('marque une tâche comme terminée', async ({ page }) => {
    const input = page.getByPlaceholder('What needs to be done?');
    await input.fill('Relire le rapport de test');
    await input.press('Enter');
    await page.getByTestId('todo-item').getByRole('checkbox').check();
    await expect(page.getByTestId('todo-item')).toHaveClass(/completed/);
    await expect(page.getByTestId('todo-count')).toHaveText('0 items left');
  });
});
