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
exports.CursosService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let CursosService = class CursosService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createCursoDto) {
        return this.prisma.curso.create({ data: createCursoDto });
    }
    findAll() {
        return this.prisma.curso.findMany({
            include: {
                turmas: {
                    select: {
                        turma: {
                            select: {
                                nome: true,
                            },
                        },
                    },
                },
            },
        });
    }
    getCursosPorOrdemABC() {
        return this.prisma.curso.findMany({
            orderBy: {
                nome: 'asc',
            },
        });
    }
    getTurmasPorCurso(cursoId) {
        return this.prisma.curso.findUnique({
            where: { id: cursoId },
            include: {
                turmas: {
                    select: {
                        turma: true,
                    },
                },
            },
        });
    }
    getAlunosPorCurso(cursoId) {
        return this.prisma.curso.findUnique({
            where: { id: cursoId },
            include: {
                turmas: {
                    select: {
                        turma: {},
                    },
                },
            },
        });
    }
    findOne(idCurso) {
        return this.prisma.curso.findUnique({
            where: { id: idCurso },
        });
    }
    update(id, updateCursoDto) {
        return this.prisma.curso.update({
            where: { id: id },
            data: updateCursoDto,
        });
    }
    remove(id) {
        return this.prisma.curso.delete({
            where: { id: id },
        });
    }
};
exports.CursosService = CursosService;
exports.CursosService = CursosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CursosService);
//# sourceMappingURL=cursos.service.js.map