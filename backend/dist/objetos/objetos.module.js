"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjetosModule = void 0;
const common_1 = require("@nestjs/common");
const objetos_service_1 = require("./objetos.service");
const objetos_controller_1 = require("./objetos.controller");
const prisma_module_1 = require("../prisma/prisma.module");
let ObjetosModule = class ObjetosModule {
};
exports.ObjetosModule = ObjetosModule;
exports.ObjetosModule = ObjetosModule = __decorate([
    (0, common_1.Module)({
        controllers: [objetos_controller_1.ObjetosController],
        providers: [objetos_service_1.ObjetosService],
        imports: [prisma_module_1.PrismaModule],
    })
], ObjetosModule);
//# sourceMappingURL=objetos.module.js.map