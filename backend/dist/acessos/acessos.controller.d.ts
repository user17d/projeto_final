import { AcessosService } from './acessos.service';
import { CreateAcessoDto } from './dto/create-acesso.dto';
import { UpdateAcessoDto } from './dto/update-acesso.dto';
export declare class AcessosController {
    private readonly acessosService;
    constructor(acessosService: AcessosService);
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
    findOne(id: string): import(".prisma/client").Prisma.Prisma__AcessoClient<{
        id: number;
        descricao: string;
        data_hora_entrada: Date;
        data_hora_saida: Date;
        aluno_id: number;
        solicitacao_id: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, updateAcessoDto: UpdateAcessoDto): import(".prisma/client").Prisma.Prisma__AcessoClient<{
        id: number;
        descricao: string;
        data_hora_entrada: Date;
        data_hora_saida: Date;
        aluno_id: number;
        solicitacao_id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__AcessoClient<{
        id: number;
        descricao: string;
        data_hora_entrada: Date;
        data_hora_saida: Date;
        aluno_id: number;
        solicitacao_id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
