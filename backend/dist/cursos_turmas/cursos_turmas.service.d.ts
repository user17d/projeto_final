import { CreateCursosTurmaDto } from './dto/create-cursos_turma.dto';
import { UpdateCursosTurmaDto } from './dto/update-cursos_turma.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class CursosTurmasService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createCursosTurmaDto: CreateCursosTurmaDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateCursosTurmaDto: UpdateCursosTurmaDto): string;
    remove(id: number): string;
}
