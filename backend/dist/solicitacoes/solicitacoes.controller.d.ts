import { SolicitacoesService } from './solicitacoes.service';
import { CreateSolicitacoeDto } from './dto/create-solicitacoe.dto';
import { UpdateSolicitacoeDto } from './dto/update-solicitacoe.dto';
export declare class SolicitacoesController {
    private readonly solicitacoesService;
    constructor(solicitacoesService: SolicitacoesService);
    create(createSolicitacoeDto: CreateSolicitacoeDto): import(".prisma/client").Prisma.Prisma__SolicitacaoClient<{
        id: number;
        descricao: string;
        data_hora_entrada: Date;
        data_hora_saida: Date;
        status: import(".prisma/client").$Enums.Status;
        professor_id: number;
        objeto_id: number;
        aluno_id: number;
        created_at: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        descricao: string;
        data_hora_entrada: Date;
        data_hora_saida: Date;
        status: import(".prisma/client").$Enums.Status;
        professor_id: number;
        objeto_id: number;
        aluno_id: number;
        created_at: Date;
    }[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__SolicitacaoClient<{
        id: number;
        descricao: string;
        data_hora_entrada: Date;
        data_hora_saida: Date;
        status: import(".prisma/client").$Enums.Status;
        professor_id: number;
        objeto_id: number;
        aluno_id: number;
        created_at: Date;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    teste(): import(".prisma/client").Prisma.PrismaPromise<{
        status: import(".prisma/client").$Enums.Status;
    }[]>;
    TodasDatas(): import(".prisma/client").Prisma.PrismaPromise<{
        data_hora_entrada: Date;
        data_hora_saida: Date;
    }[]>;
    todasDescricao(): import(".prisma/client").Prisma.PrismaPromise<{
        descricao: string;
    }[]>;
    update(id: string, updateSolicitacoeDto: UpdateSolicitacoeDto): import(".prisma/client").Prisma.Prisma__SolicitacaoClient<{
        id: number;
        descricao: string;
        data_hora_entrada: Date;
        data_hora_saida: Date;
        status: import(".prisma/client").$Enums.Status;
        professor_id: number;
        objeto_id: number;
        aluno_id: number;
        created_at: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__SolicitacaoClient<{
        id: number;
        descricao: string;
        data_hora_entrada: Date;
        data_hora_saida: Date;
        status: import(".prisma/client").$Enums.Status;
        professor_id: number;
        objeto_id: number;
        aluno_id: number;
        created_at: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
