"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentsModule = void 0;
const query_graphql_1 = require("@nestjs-query/query-graphql");
const query_typeorm_1 = require("@nestjs-query/query-typeorm");
const common_1 = require("@nestjs/common");
const create_student_input_1 = require("./dto/create-student.input");
const student_dto_1 = require("./dto/student.dto");
const update_student_input_1 = require("./dto/update-student.input");
const student_entity_1 = require("./entities/student.entity");
let StudentsModule = class StudentsModule {
};
StudentsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            query_graphql_1.NestjsQueryGraphQLModule.forFeature({
                imports: [query_typeorm_1.NestjsQueryTypeOrmModule.forFeature([student_entity_1.Student])],
                resolvers: [
                    {
                        DTOClass: student_dto_1.StudentDTO,
                        EntityClass: student_entity_1.Student,
                        CreateDTOClass: create_student_input_1.CreateStudentInput,
                        UpdateDTOClass: update_student_input_1.UpdateStudentInput,
                        enableTotalCount: true,
                        pagingStrategy: query_graphql_1.PagingStrategies.OFFSET,
                    },
                ],
            }),
        ],
        providers: [],
    })
], StudentsModule);
exports.StudentsModule = StudentsModule;
//# sourceMappingURL=students.module.js.map