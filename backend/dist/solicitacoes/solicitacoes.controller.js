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
exports.SolicitacoesController = void 0;
const common_1 = require("@nestjs/common");
const solicitacoes_service_1 = require("./solicitacoes.service");
const create_solicitacoe_dto_1 = require("./dto/create-solicitacoe.dto");
const update_solicitacoe_dto_1 = require("./dto/update-solicitacoe.dto");
let SolicitacoesController = class SolicitacoesController {
    constructor(solicitacoesService) {
        this.solicitacoesService = solicitacoesService;
    }
    create(createSolicitacoeDto) {
        return this.solicitacoesService.create(createSolicitacoeDto);
    }
    findAll() {
        return this.solicitacoesService.findAll();
    }
    findOne(id) {
        return this.solicitacoesService.findOne(+id);
    }
    teste() {
        return this.solicitacoesService.Situacao();
    }
    TodasDatas() {
        return this.solicitacoesService.TodasDatas();
    }
    todasDescricao() {
        return this.solicitacoesService.todasDescricao();
    }
    update(id, updateSolicitacoeDto) {
        return this.solicitacoesService.update(+id, updateSolicitacoeDto);
    }
    remove(id) {
        return this.solicitacoesService.remove(+id);
    }
};
exports.SolicitacoesController = SolicitacoesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_solicitacoe_dto_1.CreateSolicitacoeDto]),
    __metadata("design:returntype", void 0)
], SolicitacoesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SolicitacoesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SolicitacoesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('status'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SolicitacoesController.prototype, "teste", null);
__decorate([
    (0, common_1.Get)('datas'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SolicitacoesController.prototype, "TodasDatas", null);
__decorate([
    (0, common_1.Get)('descricao'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SolicitacoesController.prototype, "todasDescricao", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_solicitacoe_dto_1.UpdateSolicitacoeDto]),
    __metadata("design:returntype", void 0)
], SolicitacoesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SolicitacoesController.prototype, "remove", null);
exports.SolicitacoesController = SolicitacoesController = __decorate([
    (0, common_1.Controller)('solicitacoes'),
    __metadata("design:paramtypes", [solicitacoes_service_1.SolicitacoesService])
], SolicitacoesController);
//# sourceMappingURL=solicitacoes.controller.js.map