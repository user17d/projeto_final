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
exports.AcessosController = void 0;
const common_1 = require("@nestjs/common");
const acessos_service_1 = require("./acessos.service");
const create_acesso_dto_1 = require("./dto/create-acesso.dto");
const update_acesso_dto_1 = require("./dto/update-acesso.dto");
let AcessosController = class AcessosController {
    constructor(acessosService) {
        this.acessosService = acessosService;
    }
    create(createAcessoDto) {
        return this.acessosService.create(createAcessoDto);
    }
    findAll() {
        return this.acessosService.findAll();
    }
    findOne(id) {
        return this.acessosService.findOne(+id);
    }
    update(id, updateAcessoDto) {
        return this.acessosService.update(+id, updateAcessoDto);
    }
    remove(id) {
        return this.acessosService.remove(+id);
    }
};
exports.AcessosController = AcessosController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_acesso_dto_1.CreateAcessoDto]),
    __metadata("design:returntype", void 0)
], AcessosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AcessosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AcessosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_acesso_dto_1.UpdateAcessoDto]),
    __metadata("design:returntype", void 0)
], AcessosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AcessosController.prototype, "remove", null);
exports.AcessosController = AcessosController = __decorate([
    (0, common_1.Controller)('acessos'),
    __metadata("design:paramtypes", [acessos_service_1.AcessosService])
], AcessosController);
//# sourceMappingURL=acessos.controller.js.map