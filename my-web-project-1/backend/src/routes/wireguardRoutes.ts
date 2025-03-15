import { Router } from 'express';
import { syncConfigFromRemote, syncConfigToRemote, restartWireGuardServer } from '../controllers/wireguardController';

const router = Router();

router.post('/sync-from-remote', syncConfigFromRemote);
router.post('/sync-to-remote', syncConfigToRemote);
router.post('/restart-server', restartWireGuardServer);

export default router;