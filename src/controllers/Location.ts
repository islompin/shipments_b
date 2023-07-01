import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

const Get = async (req: Request, res: Response): Promise<void> => {
    res.json(await prisma.location.findMany({
        include: {
            loads: true
        }
    }));
}

const GetId = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params

    res.json(await prisma.location.findUnique({
        where: { id: +id }, include: {
            loads: true
        }
    }));
}

const Post = async (req: Request, res: Response) => {
    let { city, state, latitude, longitude, county } = req.body

    const location = await prisma.location.create({
        data: {
            city, state, latitude, longitude, county
        }
    })

    res.json({
        status: 201,
        message: "location created",
        data: location,
    })
}

const Put = async (req: Request, res: Response) => {
    const { id } = req.params
    let { city, state, latitude, longitude, county } = req.body

    const foundLocation = await prisma.location.findUnique({
        where: { id: +id }
    })

    if (foundLocation) {
        const location = await prisma.location.update({
            where: { id: +id },
            data: {
                city, state, latitude, longitude, county
            }
        })

        return res.json({
            status: 202,
            message: "location update",
            data: location,
        })
    } else {
        return res.json({
            status: 404,
            message: "location not found",
        })
    }

}

const Delete = async (req: Request, res: Response) => {
    const { id } = req.params

    const foundLocation = await prisma.location.findUnique({
        where: { id: +id }
    })

    if (foundLocation) {
        const location = await prisma.location.delete({
            where: { id: +id }
        })

        return res.json({
            status: 202,
            message: "location delete",
            data: location,
        })
    } else {
        return res.json({
            status: 404,
            message: "location not found",
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

