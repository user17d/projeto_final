import { ObjetosService } from './objetos.service';
import { CreateObjetoDto } from './dto/create-objeto.dto';
import { UpdateObjetoDto } from './dto/update-objeto.dto';
export declare class ObjetosController {
    private readonly objetosService;
    constructor(objetosService: ObjetosService);
    create(createObjetoDto: CreateObjetoDto): void;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        nome: string;
        pc_id: number;
    }[]>;
    update(id: string, updateObjetoDto: UpdateObjetoDto): string;
    remove(id: string): import(".prisma/client").Prisma.Prisma__ObjetoClient<{
        id: number;
        nome: string;
        pc_id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
