"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const inicioController_1 = __importDefault(require("../controllers/inicioController"));
class InicioRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', inicioController_1.default.list);
        this.router.get('/:carnet', inicioController_1.default.getid);
        this.router.post('/', inicioController_1.default.create);
        this.router.put('/:carnet', inicioController_1.default.update);
    }
}
const indexRoutes = new InicioRoutes();
exports.default = indexRoutes.router;
