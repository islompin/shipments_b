import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

const Get = async (req: Request, res: Response): Promise<void> => {
    res.json(await prisma.loads.findMany({
        include: {
            location: true,
            company: true,
            contact: true,
            credit: true,
            user: true,
            DatOne: true,
            DatPower: true,
            TrucksEdge: true
        }
    }));
}

const GetId = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params

    res.json(await prisma.loads.findUnique({
        where: { id: +id }, include: {
            location: true,
            company: true,
            contact: true,
            credit: true,
            user: true,
            DatOne: true,
            DatPower: true,
            TrucksEdge: true
        }
    }));
}

const Post = async (req: Request, res: Response) => {
    let {
        matchId, registryId, source, isPartial, isFactorable, isAssurable, servicedDate, deadheadMilesOrigin, deadheadMilesDestination, weight, length, rate, tripMiles, equipmentClass, pickupDate, userId, creditId, contactId, companyId, locationId, datOneId, datPowerId, trucksEdgeId
    } = req.body

    const loads = await prisma.loads.create({
        data: {
            matchId, registryId, source, isPartial, isFactorable, isAssurable, servicedDate, deadheadMilesOrigin, deadheadMilesDestination, weight, length, rate, tripMiles, equipmentClass, pickupDate, userId, creditId, contactId, companyId, locationId, datOneId, datPowerId, trucksEdgeId
        }
    })

    res.json({
        status: 201,
        message: "loads created",
        data: loads,
    })
}

const Put = async (req: Request, res: Response) => {
    const { id } = req.params
    let { matchId, registryId, source, isPartial, isFactorable, isAssurable, servicedDate, deadheadMilesOrigin, deadheadMilesDestination, weight, length, rate, tripMiles, equipmentClass, pickupDate, userId, creditId, contactId, companyId, locationId, datOneId, datPowerId, trucksEdgeId } = req.body

    const foundLoads = await prisma.loads.findUnique({
        where: { id: +id }
    })

    if (foundLoads) {
        const loads = await prisma.loads.update({
            where: { id: +id },
            data: {
                matchId, registryId, source, isPartial, isFactorable, isAssurable, servicedDate, deadheadMilesOrigin, deadheadMilesDestination, weight, length, rate, tripMiles, equipmentClass, pickupDate, userId, creditId, contactId, companyId, locationId, datOneId, datPowerId, trucksEdgeId
            }
        })

        return res.json({
            status: 202,
            message: "loads update",
            data: loads,
        })
    } else {
        return res.json({
            status: 404,
            message: "loads not found",
        })
    }

}

const Delete = async (req: Request, res: Response) => {
    const { id } = req.params

    const foundLoads = await prisma.loads.findUnique({
        where: { id: +id }
    })

    if (foundLoads) {
        const loads = await prisma.loads.delete({
            where: { id: +id }
        })

        return res.json({
            status: 202,
            message: "loads delete",
            data: loads,
        })
    } else {
        return res.json({
            status: 404,
            message: "loads not found",
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

