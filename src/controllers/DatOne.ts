import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

const Get = async (req: Request, res: Response): Promise<void> => {
    res.json(await prisma.datOne.findMany({
        include: {
            loads: true
        }
    }));
}

const GetId = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params

    res.json(await prisma.datOne.findUnique({
        where: { id: +id }, include: {
            loads: true
        }
    }));
}

const Post = async (req: Request, res: Response) => {
    let { postingId, earliestWhen, latestWhen, brokerDataRemoved, combinedOfficeId, officeId, comments, isBookable, isFromPrivateNetwork, isNegotiable, isQuickPayable, hasTiaMembership, groupId, factoring, matchingPostingId, maximumLengthFeet, maximumWeightPounds,fullPartial, assetType, rateUsd, basis, bids, worklist, tripLengthMethod, tripLengthMiles, systemStatus, status,servicedWhen, relevanceScore, ranked, postersReferenceId, postingCancelledWhen, postingExpiresWhen, privateNetworkRateInfo } = req.body

    const datOne = await prisma.datOne.create({
        data: {
            postingId, earliestWhen, latestWhen, brokerDataRemoved, combinedOfficeId, officeId, comments, isBookable, isFromPrivateNetwork, isNegotiable, isQuickPayable, hasTiaMembership, groupId, factoring, matchingPostingId, maximumLengthFeet, maximumWeightPounds,fullPartial, assetType, rateUsd, basis, bids, worklist, tripLengthMethod, tripLengthMiles, systemStatus,status,servicedWhen, relevanceScore, ranked, postersReferenceId, postingCancelledWhen, postingExpiresWhen, privateNetworkRateInfo
        }
    })

    res.json({
        status: 201,
        message: "datOne created",
        data: datOne,
    })
}

const Put = async (req: Request, res: Response) => {
    const { id } = req.params
    let { postingId, earliestWhen, latestWhen, brokerDataRemoved, combinedOfficeId, officeId, comments, isBookable, isFromPrivateNetwork, isNegotiable, isQuickPayable, hasTiaMembership, groupId, factoring, matchingPostingId, maximumLengthFeet, maximumWeightPounds,fullPartial, assetType, rateUsd, basis, bids, worklist, tripLengthMethod, tripLengthMiles, systemStatus, status,servicedWhen, relevanceScore, ranked, postersReferenceId, postingCancelledWhen, postingExpiresWhen, privateNetworkRateInfo } = req.body

    const foundDatOne = await prisma.datOne.findUnique({
        where: { id: +id }
    })

    if (foundDatOne) {
        const datOne = await prisma.datOne.update({
            where: { id: +id },
            data: {
                postingId, earliestWhen, latestWhen, brokerDataRemoved, combinedOfficeId, officeId, comments, isBookable, isFromPrivateNetwork, isNegotiable, isQuickPayable, hasTiaMembership, groupId, factoring, matchingPostingId, maximumLengthFeet, maximumWeightPounds,fullPartial, assetType, rateUsd, basis, bids, worklist, tripLengthMethod, tripLengthMiles, systemStatus, status,servicedWhen, relevanceScore, ranked, postersReferenceId, postingCancelledWhen, postingExpiresWhen, privateNetworkRateInfo
            }
        })

        return res.json({
            status: 202,
            message: "datOne update",
            data: datOne,
        })
    } else {
        return res.json({
            status: 404,
            message: "datOne not found",
        })
    }

}

const Delete = async (req: Request, res: Response) => {
    const { id } = req.params

    const foundDatOne = await prisma.datOne.findUnique({
        where: { id: +id }
    })

    if (foundDatOne) {
        const datOne = await prisma.datOne.delete({
            where: { id: +id }
        })

        return res.json({
            status: 202,
            message: "datOne delete",
            data: datOne,
        })
    } else {
        return res.json({
            status: 404,
            message: "datOne not found",
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

