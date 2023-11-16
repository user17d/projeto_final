import { CreateProfessoreDto } from './dto/create-professores.dto';
import { UpdateProfessoreDto } from './dto/update-professores.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class ProfessoresService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createProfessoreDto: CreateProfessoreDto): import(".prisma/client").Prisma.Prisma__ProfessorClient<{
        id: number;
        nome: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        nome: string;
    }[]>;
    ObterEmOrdem(): import(".prisma/client").Prisma.PrismaPromise<{
        nome: string;
    }[]>;
    findOnee(idProfessor: number): import(".prisma/client").Prisma.Prisma__ProfessorClient<{
        id: number;
        nome: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, updateProfessorDto: UpdateProfessoreDto): import(".prisma/client").Prisma.Prisma__ProfessorClient<{
        id: number;
        nome: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__ProfessorClient<{
        id: number;
        nome: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
