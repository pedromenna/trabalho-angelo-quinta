import { BaseEntity } from 'src/modules/bases/entities/base.entity';
import { Student } from 'src/modules/students/entities/student.entity';
export declare class Discipline extends BaseEntity {
    name: string;
    students: Student[];
}
