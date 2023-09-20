"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class InicioController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield database_1.default.query('SELECT * FROM usuario');
            res.json(users);
        });
    }
    getid(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { carnet } = req.params;
                const [users] = yield database_1.default.query('SELECT password FROM usuario WHERE carnet = ?', [carnet]);
                //console.log(users);
                if (Array.isArray(users) && users.length === 0) {
                    console.log('Error de autenticación: Contraseña incorrecta');
                    res.status(404).json({ text: "el carnet no existe" });
                }
                else {
                    // el users[0] esta bien, si el dato esta, entonces usara el opbjeto de esa forma
                    // no borrar el error
                    return res.json(users[0]);
                }
            }
            catch (error) {
                console.error('Error al buscar al usuario:', error);
                res.status(404).json({ text: "The usuario doesn't exits" });
            }
        });
    }
    create(req, res) {
        res.json({ Text: 'creando nuevo usuario' });
    }
    update(req, res) {
        res.json({ Text: 'actualizando usuario ' + req.params.carnet });
    }
}
const inicioController = new InicioController();
exports.default = inicioController;
