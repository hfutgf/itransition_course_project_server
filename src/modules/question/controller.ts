import { Request, Response } from 'express';
import { QuestionQuery } from './query.js';
import { QuestionType } from '@prisma/client';

export class QuestionController {
    questionQuery = new QuestionQuery();

    create = async (req: Request, res: Response) => {
        try {
            const body = req.body;
            const { templateId } = req.params;
            const question = await this.questionQuery.createQuestion(
                Number(templateId),
                body
            );
            question
                ? res.status(200).json(question)
                : res.status(400).json(question);
        } catch (error) {
            const e = error as Error;
            res.status(500).json(e.message);
        }
    };

    getAllByTemplateId = async (req: Request, res: Response) => {
        try {
            const { templateId } = req.params;
            const questions = await this.questionQuery.getQuestionsByTemplateId(
                Number(templateId)
            );
            questions
                ? res.status(200).json(questions)
                : res.status(400).json(questions);
        } catch (error) {
            const e = error as Error;
            res.status(500).json(e.message);
        }
    };

    updated = async (req: Request, res: Response) => {
        try {
            const { questionId } = req.params;
            const body = req.body;

            const question = await this.questionQuery.updatedQuestion(
                Number(questionId),
                body
            );

            question
                ? res.status(200).json(question)
                : res.status(400).json(question);
        } catch (error) {
            const e = error as Error;
            res.status(500).json(e.message);
        }
    };

    updateQuestionsOrders = async (req: Request, res: Response) => {
        try {
            const { ids } = req.body;
            const questions =
                await this.questionQuery.updateQuestionsOrders(ids);
            res.status(200).json(questions);
        } catch (error) {
            const e = error as Error;
            res.status(500).json(e.message);
        }
    };

    remove = async (req: Request, res: Response) => {
        try {
            const { questionId } = req.params;
            const question = await this.questionQuery.removeQuestion(
                Number(questionId)
            );
            question
                ? res.status(200).json(question)
                : res.status(400).json(question);
        } catch (error) {
            const e = error as Error;
            res.status(500).json(e.message);
        }
    };

    getQuestionTypes = async (req: Request, res: Response) => {
        try {
            const types = Object.values(QuestionType);
            res.status(200).json(types);
        } catch (error) {
            const e = error as Error;
            res.status(500).json(e.message);
        }
    };

    getQuesiton = async (req: Request, res: Response) => {
        try {
            const { questionId } = req.params;
            const option = await this.questionQuery.getQuesitonById(
                Number(questionId)
            );
            res.status(200).json(option);
        } catch (error) {
            const e = error as Error;
            res.status(500).json(e.message);
        }
    };
}
