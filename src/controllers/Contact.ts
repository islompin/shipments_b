import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

const Get = async (req: Request, res: Response): Promise<void> => {
    res.json(await prisma.contact.findMany({
        include: {
            loads: true
        }
    }));
}

const GetId = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params

    res.json(await prisma.contact.findUnique({
        where: { id: +id }, include: {
            loads: true
        }
    }));
}

const Post = async (req: Request, res: Response) => {
    let { contactName, contactValue, contactType } = req.body

    const contact = await prisma.contact.create({
        data: {
            contactName, contactValue, contactType
        }
    })

    res.json({
        status: 201,
        message: "contact created",
        data: contact,
    })
}

const Put = async (req: Request, res: Response) => {
    const { id } = req.params
    let { contactName, contactValue, contactType } = req.body

    const foundContact = await prisma.contact.findUnique({
        where: { id: +id }
    })

    if (foundContact) {
        const contact = await prisma.contact.update({
            where: { id: +id },
            data: {
                contactName, contactValue, contactType
            }
        })

        return res.json({
            status: 202,
            message: "contact update",
            data: contact,
        })
    } else {
        return res.json({
            status: 404,
            message: "contact not found",
        })
    }

}

const Delete = async (req: Request, res: Response) => {
    const { id } = req.params

    const foundContact = await prisma.contact.findUnique({
        where: { id: +id }
    })

    if (foundContact) {
        const contact = await prisma.contact.delete({
            where: { id: +id }
        })

        return res.json({
            status: 202,
            message: "contact delete",
            data: contact,
        })
    } else {
        return res.json({
            status: 404,
            message: "contact not found",
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

