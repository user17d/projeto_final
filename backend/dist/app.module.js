"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const prisma_module_1 = require("./prisma/prisma.module");
const alunos_module_1 = require("./alunos/alunos.module");
const turmas_module_1 = require("./turmas/turmas.module");
const cursos_module_1 = require("./cursos/cursos.module");
const cursos_turmas_module_1 = require("./cursos_turmas/cursos_turmas.module");
const solicitacoes_module_1 = require("./solicitacoes/solicitacoes.module");
const professores_module_1 = require("./professores/professores.module");
const objetos_module_1 = require("./objetos/objetos.module");
const pcs_module_1 = require("./pcs/pcs.module");
const acessos_module_1 = require("./acessos/acessos.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule, alunos_module_1.AlunosModule, turmas_module_1.TurmasModule, cursos_module_1.CursosModule, cursos_turmas_module_1.CursosTurmasModule, solicitacoes_module_1.SolicitacoesModule, professores_module_1.ProfessoresModule, objetos_module_1.ObjetosModule, pcs_module_1.PcsModule, acessos_module_1.AcessosModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map