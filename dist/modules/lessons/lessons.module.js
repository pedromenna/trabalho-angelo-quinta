"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LessonsModule = void 0;
const query_graphql_1 = require("@nestjs-query/query-graphql");
const query_typeorm_1 = require("@nestjs-query/query-typeorm");
const common_1 = require("@nestjs/common");
const create_lesson_input_1 = require("./dto/create-lesson.input");
const lesson_dto_1 = require("./dto/lesson.dto");
const update_lesson_input_1 = require("./dto/update-lesson.input");
const lesson_entity_1 = require("./entities/lesson.entity");
let LessonsModule = class LessonsModule {
};
LessonsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            query_graphql_1.NestjsQueryGraphQLModule.forFeature({
                imports: [query_typeorm_1.NestjsQueryTypeOrmModule.forFeature([lesson_entity_1.Lesson])],
                resolvers: [
                    {
                        DTOClass: lesson_dto_1.LessonDTO,
                        EntityClass: lesson_entity_1.Lesson,
                        CreateDTOClass: create_lesson_input_1.CreateLessonInput,
                        UpdateDTOClass: update_lesson_input_1.UpdateLessonInput,
                        enableTotalCount: true,
                        pagingStrategy: query_graphql_1.PagingStrategies.OFFSET,
                    },
                ],
            }),
        ],
        providers: [],
    })
], LessonsModule);
exports.LessonsModule = LessonsModule;
//# sourceMappingURL=lessons.module.js.map