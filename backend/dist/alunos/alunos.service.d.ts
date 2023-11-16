import { CreateAlunoDto } from './dto/create-aluno.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class AlunosService {
    private prisma;
    constructor(prisma: PrismaService);
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
    findOne(id: number): import(".prisma/client").Prisma.Prisma__AlunoClient<{
        id: number;
        nome: string;
        matricula: number;
        turma_id: number;
        email: string;
        senha: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, updateAlunoDto: UpdateAlunoDto): import(".prisma/client").Prisma.Prisma__AlunoClient<{
        id: number;
        nome: string;
        matricula: number;
        turma_id: number;
        email: string;
        senha: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__AlunoClient<{
        id: number;
        nome: string;
        matricula: number;
        turma_id: number;
        email: string;
        senha: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
