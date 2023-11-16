"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CursosTurmasController = void 0;
const common_1 = require("@nestjs/common");
const cursos_turmas_service_1 = require("./cursos_turmas.service");
const create_cursos_turma_dto_1 = require("./dto/create-cursos_turma.dto");
const update_cursos_turma_dto_1 = require("./dto/update-cursos_turma.dto");
let CursosTurmasController = class CursosTurmasController {
    constructor(cursosTurmasService) {
        this.cursosTurmasService = cursosTurmasService;
    }
    create(createCursosTurmaDto) {
        return this.cursosTurmasService.create(createCursosTurmaDto);
    }
    findAll() {
        return this.cursosTurmasService.findAll();
    }
    findOne(id) {
        return this.cursosTurmasService.findOne(+id);
    }
    update(id, updateCursosTurmaDto) {
        return this.cursosTurmasService.update(+id, updateCursosTurmaDto);
    }
    remove(id) {
        return this.cursosTurmasService.remove(+id);
    }
};
exports.CursosTurmasController = CursosTurmasController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_cursos_turma_dto_1.CreateCursosTurmaDto]),
    __metadata("design:returntype", void 0)
], CursosTurmasController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CursosTurmasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CursosTurmasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_cursos_turma_dto_1.UpdateCursosTurmaDto]),
    __metadata("design:returntype", void 0)
], CursosTurmasController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CursosTurmasController.prototype, "remove", null);
exports.CursosTurmasController = CursosTurmasController = __decorate([
    (0, common_1.Controller)('cursos-turmas'),
    __metadata("design:paramtypes", [cursos_turmas_service_1.CursosTurmasService])
], CursosTurmasController);
//# sourceMappingURL=cursos_turmas.controller.js.map