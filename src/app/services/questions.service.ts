import { CurrentQuestion } from '../models/question.model';
import * as crazyFactsQuestions from "../../assets/questions/crazy-fact-questions.json";
import * as bodyFactsQuestions from "../../assets/questions/body-fact-questions.json";
import * as techFactsQuestions from "../../assets/questions/tech-fact-questions.json";
import * as randomDoodleQuestions from "../../assets/questions/random-doodle-questions.json";
import * as animalSoundQuestions from "../../assets/questions/animal-sound-questions.json";

export class QuestionsService {

    constructor() {}

    public getQuestion(type: string, subject: string, id: number): CurrentQuestion {
        var questions = this.getQuestions(type, subject);
        if (id > questions.length)
          id = questions.length;
        else if (id < 1)
          id = 1;
      
        var current: CurrentQuestion = new CurrentQuestion();
        current.answered = false;
        current.question = questions[id-1];
        current.id = id;
        current.previousId = id;
        current.nextId = id;
        current.numberOfQuestions = questions.length;
    
        if (current.previousId > 1)
          current.previousId--;
        
        if (current.nextId < current.numberOfQuestions)
          current.nextId++;

        return current;
    }
    
    private getQuestions(type: string, subject: string) {
        if (type == "facts") {
            if (subject == "crazy")
                return (crazyFactsQuestions as any).default;
            if (subject == "body")
                return (bodyFactsQuestions as any).default;
            if (subject == "tech")
                return (techFactsQuestions as any).default;
        }

        if (type="doodles") {
            if (subject == "random")
                return (randomDoodleQuestions as any).default;
        }

        if (type="sounds") {
            if (subject == "animal")
                return (animalSoundQuestions as any).default;
        }
    }
}
