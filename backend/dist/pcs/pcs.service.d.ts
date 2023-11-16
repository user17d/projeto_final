import { CreatePcDto } from './dto/create-pc.dto';
import { UpdatePcDto } from './dto/update-pc.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class PcsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createPcDto: CreatePcDto): import(".prisma/client").Prisma.Prisma__PcClient<{
        id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
    }[]>;
    findOne(idPCs: number): import(".prisma/client").Prisma.Prisma__PcClient<{
        id: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    getAcessoPC(idPCs: number): import(".prisma/client").Prisma.Prisma__PcClient<{} & {
        id: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, updatePcDto: UpdatePcDto): import(".prisma/client").Prisma.Prisma__PcClient<{
        id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__PcClient<{
        id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
