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
exports.ProfessoresService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ProfessoresService = class ProfessoresService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createProfessoreDto) {
        return this.prisma.professor.create({ data: createProfessoreDto });
    }
    findAll() {
        return this.prisma.professor.findMany();
    }
    ObterEmOrdem() {
        return this.prisma.professor.findMany({
            select: {
                nome: true,
            },
            orderBy: {
                nome: 'asc',
            },
        });
    }
    findOnee(idProfessor) {
        return this.prisma.professor.findUnique({
            where: { id: idProfessor },
        });
    }
    update(id, updateProfessorDto) {
        return this.prisma.professor.update({
            where: { id: id },
            data: updateProfessorDto,
        });
    }
    remove(id) {
        return this.prisma.professor.delete({
            where: { id: id },
        });
    }
};
exports.ProfessoresService = ProfessoresService;
exports.ProfessoresService = ProfessoresService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProfessoresService);
//# sourceMappingURL=professores.service.js.map