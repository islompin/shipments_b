import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

const Get = async (req: Request, res: Response): Promise<void> => {
    res.json(await prisma.trucksEdge.findMany({
        include: {
            loads: true
        }
    }));
}

const GetId = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params

    res.json(await prisma.trucksEdge.findUnique({
        where: { id: +id }, include: {
            loads: true
        }
    }));
}

const Post = async (req: Request, res: Response) => {
    let {
        ageInMilliseconds, equipmentType, isLoad,
        servicedDate, endDate, assetType, earliest, latest, isActive, isTiaMember, officeId, combinedOfficeId, referenceState
        , isTripMilesAir, isOriginDeadheadMilesAir
        , isP3Member, isTriumphPay, searcherDotNumber
        , searcherMcNumber
    } = req.body

    const trucksEdge = await prisma.trucksEdge.create({
        data: {
            ageInMilliseconds, equipmentType, isLoad,
            servicedDate, endDate, assetType, earliest, latest, isActive, isTiaMember, officeId, combinedOfficeId, referenceState
            , isTripMilesAir, isOriginDeadheadMilesAir
            , isP3Member, isTriumphPay, searcherDotNumber
            , searcherMcNumber
        }
    })

    res.json({
        status: 201,
        message: "trucksEdge created",
        data: trucksEdge,
    })
}

const Put = async (req: Request, res: Response) => {
    const { id } = req.params
    let { ageInMilliseconds, equipmentType, isLoad,
        servicedDate, endDate, assetType, earliest, latest, isActive, isTiaMember, officeId, combinedOfficeId, referenceState
        , isTripMilesAir, isOriginDeadheadMilesAir
        , isP3Member, isTriumphPay, searcherDotNumber
        , searcherMcNumber } = req.body

    const foundTrucksEdge = await prisma.trucksEdge.findUnique({
        where: { id: +id }
    })

    if (foundTrucksEdge) {
        const trucksEdge = await prisma.trucksEdge.update({
            where: { id: +id },
            data: {
                ageInMilliseconds, equipmentType, isLoad,
                servicedDate, endDate, assetType, earliest, latest, isActive, isTiaMember, officeId, combinedOfficeId, referenceState
                , isTripMilesAir, isOriginDeadheadMilesAir
                , isP3Member, isTriumphPay, searcherDotNumber
                , searcherMcNumber
            }
        })

        return res.json({
            status: 202,
            message: "trucksEdge update",
            data: trucksEdge,
        })
    } else {
        return res.json({
            status: 404,
            message: "trucksEdge not found",
        })
    }

}

const Delete = async (req: Request, res: Response) => {
    const { id } = req.params

    const foundTrucksEdge = await prisma.trucksEdge.findUnique({
        where: { id: +id }
    })

    if (foundTrucksEdge) {
        const trucksEdge = await prisma.trucksEdge.delete({
            where: { id: +id }
        })

        return res.json({
            status: 202,
            message: "trucksEdge delete",
            data: trucksEdge,
        })
    } else {
        return res.json({
            status: 404,
            message: "trucksEdge not found",
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

