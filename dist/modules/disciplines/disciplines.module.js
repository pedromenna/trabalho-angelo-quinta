"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisciplinesModule = void 0;
const query_graphql_1 = require("@nestjs-query/query-graphql");
const query_typeorm_1 = require("@nestjs-query/query-typeorm");
const common_1 = require("@nestjs/common");
const create_discipline_input_1 = require("./dto/create-discipline.input");
const discipline_dto_1 = require("./dto/discipline.dto");
const update_discipline_input_1 = require("./dto/update-discipline.input");
const discipline_entity_1 = require("./entities/discipline.entity");
let DisciplinesModule = class DisciplinesModule {
};
DisciplinesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            query_graphql_1.NestjsQueryGraphQLModule.forFeature({
                imports: [query_typeorm_1.NestjsQueryTypeOrmModule.forFeature([discipline_entity_1.Discipline])],
                resolvers: [
                    {
                        DTOClass: discipline_dto_1.DisciplineDTO,
                        EntityClass: discipline_entity_1.Discipline,
                        CreateDTOClass: create_discipline_input_1.CreateDisciplineInput,
                        UpdateDTOClass: update_discipline_input_1.UpdateDisciplineInput,
                        enableTotalCount: true,
                        pagingStrategy: query_graphql_1.PagingStrategies.OFFSET,
                    },
                ],
            }),
        ],
        providers: [],
    })
], DisciplinesModule);
exports.DisciplinesModule = DisciplinesModule;
//# sourceMappingURL=disciplines.module.js.map