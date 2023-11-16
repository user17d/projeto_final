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
exports.PcsController = void 0;
const common_1 = require("@nestjs/common");
const pcs_service_1 = require("./pcs.service");
const create_pc_dto_1 = require("./dto/create-pc.dto");
const update_pc_dto_1 = require("./dto/update-pc.dto");
let PcsController = class PcsController {
    constructor(pcsService) {
        this.pcsService = pcsService;
    }
    create(createPcDto) {
        return this.pcsService.create(createPcDto);
    }
    findAll() {
        return this.pcsService.findAll();
    }
    findOne(id) {
        return this.pcsService.findOne(+id);
    }
    update(id, updatePcDto) {
        return this.pcsService.update(+id, updatePcDto);
    }
    remove(id) {
        return this.pcsService.remove(+id);
    }
};
exports.PcsController = PcsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_pc_dto_1.CreatePcDto]),
    __metadata("design:returntype", void 0)
], PcsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PcsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PcsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_pc_dto_1.UpdatePcDto]),
    __metadata("design:returntype", void 0)
], PcsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PcsController.prototype, "remove", null);
exports.PcsController = PcsController = __decorate([
    (0, common_1.Controller)('pcs'),
    __metadata("design:paramtypes", [pcs_service_1.PcsService])
], PcsController);
//# sourceMappingURL=pcs.controller.js.map