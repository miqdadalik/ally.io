import { Router } from 'express';
import { setupServer, syncConfigFromRemote, syncConfigToRemote, restartServer } from '../controllers/wireguardController';

const router = Router();

router.post('/setup-server', setupServer);
router.post('/sync-config-from-remote', syncConfigFromRemote);
router.post('/sync-config-to-remote', syncConfigToRemote);
router.post('/restart-server', restartServer);

export default router;