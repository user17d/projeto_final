import { ProfessoresService } from './professores.service';
import { CreateProfessoreDto } from './dto/create-professores.dto';
import { UpdateProfessoreDto } from './dto/update-professores.dto';
export declare class ProfessoresController {
    private readonly professoresService;
    constructor(professoresService: ProfessoresService);
    create(createProfessoreDto: CreateProfessoreDto): import(".prisma/client").Prisma.Prisma__ProfessorClient<{
        id: number;
        nome: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        nome: string;
    }[]>;
    findOnee(id: string): import(".prisma/client").Prisma.Prisma__ProfessorClient<{
        id: number;
        nome: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    findOne(id: string): import(".prisma/client").Prisma.PrismaPromise<{
        nome: string;
    }[]>;
    update(id: string, updateProfessoreDto: UpdateProfessoreDto): import(".prisma/client").Prisma.Prisma__ProfessorClient<{
        id: number;
        nome: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__ProfessorClient<{
        id: number;
        nome: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
