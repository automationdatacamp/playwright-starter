import { test, expect } from '@playwright/test';

// API publique de démonstration (JSONPlaceholder) : lecture et création simulée.
const API = 'https://jsonplaceholder.typicode.com';

test('lit une ressource', async ({ request }) => {
  const res = await request.get(`${API}/posts/1`);
  expect(res.ok()).toBeTruthy();
  const body = await res.json();
  expect(body).toMatchObject({ id: 1, userId: 1 });
});

test('crée une ressource', async ({ request }) => {
  const res = await request.post(`${API}/posts`, {
    data: { title: 'Test API Playwright', body: 'Créé par un test', userId: 1 },
  });
  expect(res.status()).toBe(201);
  expect(await res.json()).toMatchObject({ title: 'Test API Playwright' });
});
