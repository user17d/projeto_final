import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class CursosService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createCursoDto: CreateCursoDto): import(".prisma/client").Prisma.Prisma__CursoClient<{
        id: number;
        nome: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<({
        turmas: {
            turma: {
                nome: string;
            };
        }[];
    } & {
        id: number;
        nome: string;
    })[]>;
    getCursosPorOrdemABC(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        nome: string;
    }[]>;
    getTurmasPorCurso(cursoId: number): import(".prisma/client").Prisma.Prisma__CursoClient<{
        turmas: {
            turma: {
                id: number;
                nome: string;
            };
        }[];
    } & {
        id: number;
        nome: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    getAlunosPorCurso(cursoId: number): import(".prisma/client").Prisma.Prisma__CursoClient<{
        turmas: {
            turma: {
                id: number;
                nome: string;
            };
        }[];
    } & {
        id: number;
        nome: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    findOne(idCurso: number): import(".prisma/client").Prisma.Prisma__CursoClient<{
        id: number;
        nome: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, updateCursoDto: UpdateCursoDto): import(".prisma/client").Prisma.Prisma__CursoClient<{
        id: number;
        nome: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__CursoClient<{
        id: number;
        nome: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
