import { CursosTurmasService } from './cursos_turmas.service';
import { CreateCursosTurmaDto } from './dto/create-cursos_turma.dto';
import { UpdateCursosTurmaDto } from './dto/update-cursos_turma.dto';
export declare class CursosTurmasController {
    private readonly cursosTurmasService;
    constructor(cursosTurmasService: CursosTurmasService);
    create(createCursosTurmaDto: CreateCursosTurmaDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateCursosTurmaDto: UpdateCursosTurmaDto): string;
    remove(id: string): string;
}
