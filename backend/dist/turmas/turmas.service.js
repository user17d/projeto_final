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
exports.TurmasService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let TurmasService = class TurmasService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createTurmaDto) {
    }
    findAll() {
        return this.prisma.turma.findMany({
            include: {
                cursos: {}
            }
        });
    }
    getTurmasPorOrdem() {
        return this.prisma.turma.findMany({
            orderBy: {
                nome: 'asc'
            }
        });
    }
    findOne(idTurmas) {
        return this.prisma.turma.findUnique({
            where: { id: idTurmas }
        });
    }
    getAlunosPorTurma(turmaId) {
        return this.prisma.turma.findUnique({
            where: { id: turmaId },
            include: {
                alunos: {
                    select: {
                        turma: true
                    }
                }
            }
        });
    }
    update(id, updateTurmaDto) {
        return this.prisma.turma.update({
            where: { id: id },
            data: updateTurmaDto
        });
    }
    remove(id) {
        return this.prisma.turma.delete({
            where: { id: id }
        });
    }
};
exports.TurmasService = TurmasService;
exports.TurmasService = TurmasService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TurmasService);
//# sourceMappingURL=turmas.service.js.map