import { CreateObjetoDto } from './dto/create-objeto.dto';
import { UpdateObjetoDto } from './dto/update-objeto.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class ObjetosService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createObjetoDto: CreateObjetoDto): void;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        nome: string;
        pc_id: number;
    }[]>;
    findOne(idObjeto: number): import(".prisma/client").Prisma.Prisma__ObjetoClient<{
        id: number;
        nome: string;
        pc_id: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, updateObjetoDto: UpdateObjetoDto): string;
    remove(id: number): import(".prisma/client").Prisma.Prisma__ObjetoClient<{
        id: number;
        nome: string;
        pc_id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
