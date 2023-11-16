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
exports.ObjetosController = void 0;
const common_1 = require("@nestjs/common");
const objetos_service_1 = require("./objetos.service");
const create_objeto_dto_1 = require("./dto/create-objeto.dto");
const update_objeto_dto_1 = require("./dto/update-objeto.dto");
let ObjetosController = class ObjetosController {
    constructor(objetosService) {
        this.objetosService = objetosService;
    }
    create(createObjetoDto) {
        return this.objetosService.create(createObjetoDto);
    }
    findAll() {
        return this.objetosService.findAll();
    }
    update(id, updateObjetoDto) {
        return this.objetosService.update(+id, updateObjetoDto);
    }
    remove(id) {
        return this.objetosService.remove(+id);
    }
};
exports.ObjetosController = ObjetosController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_objeto_dto_1.CreateObjetoDto]),
    __metadata("design:returntype", void 0)
], ObjetosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ObjetosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_objeto_dto_1.UpdateObjetoDto]),
    __metadata("design:returntype", void 0)
], ObjetosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ObjetosController.prototype, "remove", null);
exports.ObjetosController = ObjetosController = __decorate([
    (0, common_1.Controller)('objetos'),
    __metadata("design:paramtypes", [objetos_service_1.ObjetosService])
], ObjetosController);
//# sourceMappingURL=objetos.controller.js.map