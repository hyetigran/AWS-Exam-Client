import cuid from 'cuid';

export abstract class AbstractEntity {
    constructor(public gid?: string){
        gid ? (this.gid = gid) : (this.gid = cuid());
    }
    equals(e1: AbstractEntity, e2: AbstractEntity) {
        return e1.gid === e2.gid;
    }
}

export class Answer extends AbstractEntity {
    constructor(
        public questionId: string,
        public type: string,
        public choice: string,
        public isSelected: boolean,
        gid?: string
    ) {
        super(gid);
    }
}

export class Question extends AbstractEntity {
    answers: Answer[]
}