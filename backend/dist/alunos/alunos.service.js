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
exports.AlunosService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let AlunosService = class AlunosService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createAlunoDto) {
        return this.prisma.aluno.create({ data: {
                nome: createAlunoDto.nome,
                matricula: createAlunoDto.matricula,
                email: createAlunoDto.email,
                senha: createAlunoDto.senha,
                turma: {
                    connect: {
                        id: createAlunoDto.turma_id
                    }
                },
            }
        });
    }
    findAll() {
        return this.prisma.aluno.findMany();
    }
    findAllComTurmas() {
        return this.prisma.aluno.findMany({
            include: {
                turma: true
            }
        });
    }
    findOne(id) {
        return this.prisma.aluno.findUnique({
            where: { id: id }
        });
    }
    update(id, updateAlunoDto) {
        return this.prisma.aluno.update({
            where: { id: id },
            data: updateAlunoDto
        });
    }
    remove(id) {
        return this.prisma.aluno.delete({
            where: { id: id }
        });
    }
};
exports.AlunosService = AlunosService;
exports.AlunosService = AlunosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AlunosService);
//# sourceMappingURL=alunos.service.js.map