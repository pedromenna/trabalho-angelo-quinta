import { BaseEntity } from 'src/modules/bases/entities/base.entity';
import { Lesson } from 'src/modules/lessons/entities/lesson.entity';
export declare class Content extends BaseEntity {
    description: string;
    linkContent: string;
    lesson: Lesson;
    lessonId: string;
}
