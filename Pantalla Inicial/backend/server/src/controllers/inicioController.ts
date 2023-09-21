import { Request, Response } from 'express';
import pool from '../database';
import { RowDataPacket } from 'mysql2';


class InicioController {
    
    public async list(req: Request, res: Response): Promise<void>{
        const users = await pool.query('SELECT * FROM usuario');
        res.json(users);
    }

    public  async getid(req: Request, res: Response): Promise<any>{
        try{
            const {carnet} = req.params;
            const [users]: RowDataPacket[] = await pool.query('SELECT password FROM usuario WHERE carnet = ?',[carnet]);
            //console.log(users);
            if (Array.isArray(users) && users.length === 0) {
                console.log('Error el carnet no esta registrado');
                res.status(404).json({ text: "el carnet no existe" });
            } else {
                // el users[0] esta bien, si el dato esta, entonces usara el opbjeto de esa forma
                // no borrar el error
                return res.json(users[0]);
            }
        }    
        catch (error){
            console.error('Error al buscar al usuario:', error);
            res.status(404).json({ text: "The usuario doesn't exits" });
        }
    }

    public create (req: Request, res: Response){
        res.json({Text: 'creando nuevo usuario'})
    }

    public update (req: Request, res: Response){
        res.json({Text: 'actualizando usuario ' + req.params.carnet})
    }

    public async getperfil(req: Request, res: Response): Promise<any>{
        try{
            const {carnet} = req.params;
            const [users]: RowDataPacket[] = await pool.query('SELECT carnet, nombre, apellido, correo FROM usuario WHERE carnet = ?',[carnet]);
            console.log(users);
            if (Array.isArray(users) && users.length === 0) {
                console.log('Error, perfil no encontrado');
                res.status(404).json({ text: "el carnet no existe" });
            } else {
                // el users[0] esta bien, si el dato esta, entonces usara el opbjeto de esa forma
                // no borrar el error
                return res.json(users);
            }
        }    
        catch (error){
            console.error('Error al buscar al perfil:', error);
            res.status(404).json({ text: "Error al buscar al perfil:" });
        }
    }

}

const inicioController = new InicioController();
export default inicioController;
