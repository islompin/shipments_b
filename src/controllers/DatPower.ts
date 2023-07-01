import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

const Get = async (req: Request, res: Response): Promise<void> => {
    res.json(await prisma.datPower.findMany({
        include: {
            loads: true
        }
    }));
}

const GetId = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params

    res.json(await prisma.datPower.findUnique({
        where: { id: +id }, include: {
            loads: true
        }
    }));
}

const Post = async (req: Request, res: Response) => {
    let {
        age, ageInMilliseconds, inExactColumnMap, isAvailable, routeUrl, order, isLoad, officeLocation, referenceState, isTiaMember, factorableUrl, assurableUrl, officeId, isPreferredOffice, isBlockedOffice, postersReferenceId, bookItNowType, bookItNowTooltip, bookItNowFormatted, bookItNow, isBookItNow, isTaken, isWorked, showActivity, takeUserId, workedStatusText, workedStatusValue
        , workedNote, workedInitials, takenInitials, searcherDotNumber, searcherMcNumber
    } = req.body

    const datPower = await prisma.datPower.create({
        data: {
            age, ageInMilliseconds, inExactColumnMap, isAvailable, routeUrl, order, isLoad, officeLocation, referenceState, isTiaMember, factorableUrl, assurableUrl, officeId, isPreferredOffice, isBlockedOffice, postersReferenceId, bookItNowType, bookItNowTooltip, bookItNowFormatted, bookItNow, isBookItNow, isTaken, isWorked, showActivity, takeUserId, workedStatusText, workedStatusValue
            , workedNote, workedInitials, takenInitials, searcherDotNumber, searcherMcNumber
        }
    })

    res.json({
        status: 201,
        message: "datPower created",
        data: datPower,
    })
}

const Put = async (req: Request, res: Response) => {
    const { id } = req.params
    let {
        age, ageInMilliseconds, inExactColumnMap, isAvailable, routeUrl, order, isLoad, officeLocation, referenceState, isTiaMember, factorableUrl, assurableUrl, officeId, isPreferredOffice, isBlockedOffice, postersReferenceId, bookItNowType, bookItNowTooltip, bookItNowFormatted, bookItNow, isBookItNow, isTaken, isWorked, showActivity, takeUserId, workedStatusText, workedStatusValue
        , workedNote, workedInitials, takenInitials, searcherDotNumber, searcherMcNumber
    } = req.body

    const foundDatPower = await prisma.datPower.findUnique({
        where: { id: +id }
    })

    if (foundDatPower) {
        const datPower = await prisma.datPower.update({
            where: { id: +id },
            data: {
                age, ageInMilliseconds, inExactColumnMap, isAvailable, routeUrl, order, isLoad, officeLocation, referenceState, isTiaMember, factorableUrl, assurableUrl, officeId, isPreferredOffice, isBlockedOffice, postersReferenceId, bookItNowType, bookItNowTooltip, bookItNowFormatted, bookItNow, isBookItNow, isTaken, isWorked, showActivity, takeUserId, workedStatusText, workedStatusValue
                , workedNote, workedInitials, takenInitials, searcherDotNumber, searcherMcNumber
            }
        })

        return res.json({
            status: 202,
            message: "datPower update",
            data: datPower,
        })
    } else {
        return res.json({
            status: 404,
            message: "datPower not found",
        })
    }

}

const Delete = async (req: Request, res: Response) => {
    const { id } = req.params

    const foundDatPower = await prisma.datPower.findUnique({
        where: { id: +id }
    })

    if (foundDatPower) {
        const datPower = await prisma.datPower.delete({
            where: { id: +id }
        })

        return res.json({
            status: 202,
            message: "datPower delete",
            data: datPower,
        })
    } else {
        return res.json({
            status: 404,
            message: "datPower not found",
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

