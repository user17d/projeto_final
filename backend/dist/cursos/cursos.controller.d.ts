import { CursosService } from './cursos.service';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
export declare class CursosController {
    private readonly cursosService;
    constructor(cursosService: CursosService);
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
    findOne(id: string): import(".prisma/client").Prisma.Prisma__CursoClient<{
        id: number;
        nome: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    getTurmasPorCurso(id: string): import(".prisma/client").Prisma.Prisma__CursoClient<{
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
    update(id: string, updateCursoDto: UpdateCursoDto): import(".prisma/client").Prisma.Prisma__CursoClient<{
        id: number;
        nome: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__CursoClient<{
        id: number;
        nome: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
