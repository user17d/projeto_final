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
exports.SolicitacoesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let SolicitacoesService = class SolicitacoesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createSolocitacoeDto) {
        return this.prisma.solicitacao.create({ data: {
                descricao: createSolocitacoeDto.descricao,
                data_hora_entrada: createSolocitacoeDto.data_hora_entrada,
                data_hora_saida: createSolocitacoeDto.data_hora_saida,
                professor: {
                    connect: {
                        id: createSolocitacoeDto.professor_id
                    }
                },
                aluno: {
                    connect: {
                        id: createSolocitacoeDto.aluno_id
                    }
                },
            } });
    }
    findAll() {
        return this.prisma.solicitacao.findMany({});
    }
    todasDescricao() {
        return this.prisma.solicitacao.findMany({
            select: {
                descricao: true,
            },
        });
    }
    Situacao() {
        return this.prisma.solicitacao.findMany({
            select: {
                status: true,
            },
        });
    }
    TodasDatas() {
        return this.prisma.solicitacao.findMany({
            select: {
                data_hora_entrada: true,
                data_hora_saida: true,
            },
        });
    }
    findOne(id) {
        return this.prisma.solicitacao.findUnique({
            where: { id: id },
        });
    }
    update(id, updateSolicitacoeDto) {
        return this.prisma.solicitacao.update({
            where: { id: id },
            data: updateSolicitacoeDto,
        });
    }
    remove(id) {
        return this.prisma.solicitacao.delete({
            where: { id: id },
        });
    }
};
exports.SolicitacoesService = SolicitacoesService;
exports.SolicitacoesService = SolicitacoesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SolicitacoesService);
//# sourceMappingURL=solicitacoes.service.js.map