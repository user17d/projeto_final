import { TurmasService } from './turmas.service';
import { CreateTurmaDto } from './dto/create-turma.dto';
import { UpdateTurmaDto } from './dto/update-turma.dto';
export declare class TurmasController {
    private readonly turmasService;
    constructor(turmasService: TurmasService);
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
    findOne(id: string): import(".prisma/client").Prisma.Prisma__TurmaClient<{
        id: number;
        nome: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, updateTurmaDto: UpdateTurmaDto): import(".prisma/client").Prisma.Prisma__TurmaClient<{
        id: number;
        nome: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__TurmaClient<{
        id: number;
        nome: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
