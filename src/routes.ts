import { Router } from "express"

import { SettingsController } from './controllers/SettingsController';

const routes = Router()

const settingsController = new SettingsController();

routes.post('/settings', settingsController.create );

routes.get('/', async (request, response) => {
  return response.json({
    message: "Hello NLW05"
  });
})

export { routes }
