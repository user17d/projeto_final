import { AlunosService } from './alunos.service';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';
export declare class AlunosController {
    private readonly alunosService;
    constructor(alunosService: AlunosService);
    create(createAlunoDto: CreateAlunoDto): import(".prisma/client").Prisma.Prisma__AlunoClient<{
        id: number;
        nome: string;
        matricula: number;
        turma_id: number;
        email: string;
        senha: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        nome: string;
        matricula: number;
        turma_id: number;
        email: string;
        senha: string;
    }[]>;
    findAllComTurmas(): import(".prisma/client").Prisma.PrismaPromise<({
        turma: {
            id: number;
            nome: string;
        };
    } & {
        id: number;
        nome: string;
        matricula: number;
        turma_id: number;
        email: string;
        senha: string;
    })[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__AlunoClient<{
        id: number;
        nome: string;
        matricula: number;
        turma_id: number;
        email: string;
        senha: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, updateAlunoDto: UpdateAlunoDto): import(".prisma/client").Prisma.Prisma__AlunoClient<{
        id: number;
        nome: string;
        matricula: number;
        turma_id: number;
        email: string;
        senha: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__AlunoClient<{
        id: number;
        nome: string;
        matricula: number;
        turma_id: number;
        email: string;
        senha: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
