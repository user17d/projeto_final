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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcessosService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let AcessosService = class AcessosService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createAcessoDto) {
        return this.prisma.acesso.create({ data: {
                descricao: createAcessoDto.descricao,
                data_hora_entrada: createAcessoDto.data_hora_entrada,
                data_hora_saida: createAcessoDto.data_hora_saida,
                aluno: {
                    connect: {
                        id: createAcessoDto.aluno_id
                    }
                },
                solicitacao: {
                    connect: {
                        id: createAcessoDto.solicitacao_id
                    }
                },
            }
        });
    }
    findAll() {
        return this.prisma.acesso.findMany({});
    }
    findOne(id) {
        return this.prisma.acesso.findUnique({
            where: { id: id }
        });
    }
    update(id, updateAcessoDto) {
        return this.prisma.acesso.update({
            where: { id: id },
            data: updateAcessoDto
        });
    }
    remove(id) {
        return this.prisma.acesso.delete({
            where: { id: id }
        });
    }
};
exports.AcessosService = AcessosService;
exports.AcessosService = AcessosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AcessosService);
//# sourceMappingURL=acessos.service.js.map