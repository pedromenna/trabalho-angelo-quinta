"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentsModule = void 0;
const query_graphql_1 = require("@nestjs-query/query-graphql");
const query_typeorm_1 = require("@nestjs-query/query-typeorm");
const common_1 = require("@nestjs/common");
const content_dto_1 = require("./dto/content.dto");
const create_content_input_1 = require("./dto/create-content.input");
const update_content_input_1 = require("./dto/update-content.input");
const content_entity_1 = require("./entities/content.entity");
let ContentsModule = class ContentsModule {
};
ContentsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            query_graphql_1.NestjsQueryGraphQLModule.forFeature({
                imports: [query_typeorm_1.NestjsQueryTypeOrmModule.forFeature([content_entity_1.Content])],
                resolvers: [
                    {
                        DTOClass: content_dto_1.ContentDTO,
                        EntityClass: content_entity_1.Content,
                        CreateDTOClass: create_content_input_1.CreateContentInput,
                        UpdateDTOClass: update_content_input_1.UpdateContentInput,
                        enableTotalCount: true,
                        pagingStrategy: query_graphql_1.PagingStrategies.OFFSET,
                    },
                ],
            }),
        ],
        providers: [],
    })
], ContentsModule);
exports.ContentsModule = ContentsModule;
//# sourceMappingURL=contents.module.js.map