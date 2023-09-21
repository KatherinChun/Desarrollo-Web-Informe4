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

    public async create (req: Request, res: Response): Promise<any>{
        try {
            const { carnet, nombre, apellido, correo, password } = req.body;
            if (!carnet) {
                console.log('Error, el carnet no puede ser nulo');
                res.status(400).json({ text: "el carnet no puede ser nulo" });
            } else {
                const [existingUser]: RowDataPacket[] = await pool.query('SELECT * FROM usuario WHERE carnet = ?', [carnet]);
                if (existingUser.length > 0) {
                    console.log('Error, el usuario ya existe');
                    res.status(400).json({ text: "el usuario ya existe" });
                } else {
                    await pool.query('INSERT INTO usuario (carnet, nombre, apellido, correo, password) VALUES (?, ?, ?, ?, ?)', [carnet, nombre, apellido, correo, password]);
                    console.log('Usuario creado exitosamente');
                    res.status(200).json({ text: "Usuario creado exitosamente" });
                }
            }
        } catch (error) {
            console.error('Error al crear el usuario:', error);
            res.status(500).json({ text: "Error al crear el usuario" });
        }
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

    public async updatePassword(req: Request, res: Response): Promise<void> {
        const { carnet } = req.params;
        const { password } = req.body;
        await pool.query('UPDATE usuario SET password = ? WHERE carnet = ?', [password, carnet]);
        console.log('contraseña actualizada')
        res.json({ message: 'Contraseña actualizada' });
    }




}

const inicioController = new InicioController();
export default inicioController;
