import { CreateAcessoDto } from './dto/create-acesso.dto';
import { UpdateAcessoDto } from './dto/update-acesso.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class AcessosService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createAcessoDto: CreateAcessoDto): import(".prisma/client").Prisma.Prisma__AcessoClient<{
        id: number;
        descricao: string;
        data_hora_entrada: Date;
        data_hora_saida: Date;
        aluno_id: number;
        solicitacao_id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        descricao: string;
        data_hora_entrada: Date;
        data_hora_saida: Date;
        aluno_id: number;
        solicitacao_id: number;
    }[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__AcessoClient<{
        id: number;
        descricao: string;
        data_hora_entrada: Date;
        data_hora_saida: Date;
        aluno_id: number;
        solicitacao_id: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, updateAcessoDto: UpdateAcessoDto): import(".prisma/client").Prisma.Prisma__AcessoClient<{
        id: number;
        descricao: string;
        data_hora_entrada: Date;
        data_hora_saida: Date;
        aluno_id: number;
        solicitacao_id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__AcessoClient<{
        id: number;
        descricao: string;
        data_hora_entrada: Date;
        data_hora_saida: Date;
        aluno_id: number;
        solicitacao_id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
