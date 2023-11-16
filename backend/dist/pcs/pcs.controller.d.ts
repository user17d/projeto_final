import { PcsService } from './pcs.service';
import { CreatePcDto } from './dto/create-pc.dto';
import { UpdatePcDto } from './dto/update-pc.dto';
export declare class PcsController {
    private readonly pcsService;
    constructor(pcsService: PcsService);
    create(createPcDto: CreatePcDto): import(".prisma/client").Prisma.Prisma__PcClient<{
        id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
    }[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__PcClient<{
        id: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, updatePcDto: UpdatePcDto): import(".prisma/client").Prisma.Prisma__PcClient<{
        id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__PcClient<{
        id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
