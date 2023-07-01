import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

const Get = async (req: Request, res: Response): Promise<void> => {
    res.json(await prisma.users.findMany({
        include: {
            loads: true
        }
    }));
}

const GetId = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params

    res.json(await prisma.users.findUnique({
        where: { id: +id }, include: {
            loads: true
        }
    }));
}

const Post = async (req: Request, res: Response) => {
    let { userId, userName,email,phone } = req.body

    const users = await prisma.users.create({
        data: {
            userId, userName,email,phone
        }
    })

    res.json({
        status: 201,
        message: "users created",
        data: users,
    })
}

const Put = async (req: Request, res: Response) => {
    const { id } = req.params
    let { userId, userName,email,phone } = req.body

    const foundUsers = await prisma.users.findUnique({
        where: { id: +id }
    })

    if (foundUsers) {
        const users = await prisma.users.update({
            where: { id: +id },
            data: {
                userId, userName,email,phone
            }
        })

        return res.json({
            status: 202,
            message: "users update",
            data: users,
        })
    } else {
        return res.json({
            status: 404,
            message: "users not found",
        })
    }

}

const Delete = async (req: Request, res: Response) => {
    const { id } = req.params

    const foundUsers = await prisma.users.findUnique({
        where: { id: +id }
    })

    if (foundUsers) {
        const users = await prisma.users.delete({
            where: { id: +id }
        })

        return res.json({
            status: 202,
            message: "users delete",
            data: users,
        })
    } else {
        return res.json({
            status: 404,
            message: "users not found",
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

