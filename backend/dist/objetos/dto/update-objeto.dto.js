"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateObjetoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_objeto_dto_1 = require("./create-objeto.dto");
class UpdateObjetoDto extends (0, swagger_1.PartialType)(create_objeto_dto_1.CreateObjetoDto) {
}
exports.UpdateObjetoDto = UpdateObjetoDto;
//# sourceMappingURL=update-objeto.dto.js.map