import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

const Get = async (req: Request, res: Response): Promise<void> => {
    res.json(await prisma.credit.findMany({
        include: {
            loads: true
        }
    }));
}

const GetId = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params

    res.json(await prisma.credit.findUnique({
        where: { id: +id }, include: {
            loads: true
        }
    }));
}

const Post = async (req: Request, res: Response) => {
    let { daysToPay,creditScore,creditScoreUrl,daysToPayUrl } = req.body

    const credit = await prisma.credit.create({
        data: {
            daysToPay,creditScore,creditScoreUrl,daysToPayUrl
        }
    })

    res.json({
        status: 201,
        message: "credit created",
        data: credit,
    })
}

const Put = async (req: Request, res: Response) => {
    const { id } = req.params
    let { daysToPay,creditScore,creditScoreUrl,daysToPayUrl } = req.body

    const foundCredit = await prisma.credit.findUnique({
        where: { id: +id }
    })

    if (foundCredit) {
        const credit = await prisma.credit.update({
            where: { id: +id },
            data: {
                daysToPay,creditScore,creditScoreUrl,daysToPayUrl
            }
        })

        return res.json({
            status: 202,
            message: "credit update",
            data: credit,
        })
    } else {
        return res.json({
            status: 404,
            message: "credit not found",
        })
    }

}

const Delete = async (req: Request, res: Response) => {
    const { id } = req.params

    const foundCredit = await prisma.credit.findUnique({
        where: { id: +id }
    })

    if (foundCredit) {
        const credit = await prisma.credit.delete({
            where: { id: +id }
        })

        return res.json({
            status: 202,
            message: "credit delete",
            data: credit,
        })
    } else {
        return res.json({
            status: 404,
            message: "credit not found",
        })
    }

}

export default {
    Get,
    GetId,
    Post,
    Put,
    Delete
}

