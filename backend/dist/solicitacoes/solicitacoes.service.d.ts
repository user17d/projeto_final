import { CreateSolicitacoeDto } from './dto/create-solicitacoe.dto';
import { UpdateSolicitacoeDto } from './dto/update-solicitacoe.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class SolicitacoesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createSolocitacoeDto: CreateSolicitacoeDto): import(".prisma/client").Prisma.Prisma__SolicitacaoClient<{
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
    todasDescricao(): import(".prisma/client").Prisma.PrismaPromise<{
        descricao: string;
    }[]>;
    Situacao(): import(".prisma/client").Prisma.PrismaPromise<{
        status: import(".prisma/client").$Enums.Status;
    }[]>;
    TodasDatas(): import(".prisma/client").Prisma.PrismaPromise<{
        data_hora_entrada: Date;
        data_hora_saida: Date;
    }[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__SolicitacaoClient<{
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
    update(id: number, updateSolicitacoeDto: UpdateSolicitacoeDto): import(".prisma/client").Prisma.Prisma__SolicitacaoClient<{
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
    remove(id: number): import(".prisma/client").Prisma.Prisma__SolicitacaoClient<{
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
