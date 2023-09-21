import { Router } from 'express';
import inicioController from '../controllers/inicioController';

class InicioRoutes{
    router : Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', inicioController.list);
        this.router.get('/:carnet', inicioController.getid);
        this.router.get('/perfil/:carnet', inicioController.getperfil);
        this.router.put('/:carnet',inicioController.update)
        this.router.post('/createUser', inicioController.create);
        this.router.post('/publicacion', inicioController.creatpubli);
    }
}

const indexRoutes = new InicioRoutes();
export default indexRoutes.router;