import { CreateTurmaDto } from './dto/create-turma.dto';
import { UpdateTurmaDto } from './dto/update-turma.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class TurmasService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createTurmaDto: CreateTurmaDto): void;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<({
        cursos: {
            id: number;
            periodo: string;
            curso_id: number;
            turma_id: number;
        }[];
    } & {
        id: number;
        nome: string;
    })[]>;
    getTurmasPorOrdem(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        nome: string;
    }[]>;
    findOne(idTurmas: number): import(".prisma/client").Prisma.Prisma__TurmaClient<{
        id: number;
        nome: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    getAlunosPorTurma(turmaId: number): import(".prisma/client").Prisma.Prisma__TurmaClient<{
        alunos: {
            turma: {
                id: number;
                nome: string;
            };
        }[];
    } & {
        id: number;
        nome: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, updateTurmaDto: UpdateTurmaDto): import(".prisma/client").Prisma.Prisma__TurmaClient<{
        id: number;
        nome: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__TurmaClient<{
        id: number;
        nome: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
