export class CurrentQuestion {
    question: Question;
    id: number;
    previousId: number;
    nextId: number;
    answered: boolean;
    numberOfQuestions: number;
}

export interface Question {
    question: string;
    attachment: Attachment;
    options: Option[];
    answer: Answer;
}

export interface Attachment {
    url: string;
    externalUrl: string;
    height: number;
    type: string;
}

export interface Option {
    id: number,
    option: string;
    color: string;
}

export interface Answer {
    id: number;
    description: string;
}