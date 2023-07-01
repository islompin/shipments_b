import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

const Get = async (req: Request, res: Response): Promise<void> => {
    res.json(await prisma.company.findMany({
        include: {
            loads: true
        }
    }));
}

const GetId = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params

    res.json(await prisma.company.findUnique({
        where: { id: +id }, include: {
            loads: true
        }
    }));
}

const Post = async (req: Request, res: Response) => {
    let { companyName, companyAdress,companyState, companyUrl, companyType } = req.body

    const company = await prisma.company.create({
        data: {
            companyName, companyAdress,companyState, companyUrl, companyType
        }
    })

    res.json({
        status: 201,
        message: "company created",
        data: company,
    })
}

const Put = async (req: Request, res: Response) => {
    const { id } = req.params
    let { companyName, companyAdress,companyState, companyUrl, companyType } = req.body

    const foundCompany = await prisma.company.findUnique({
        where: { id: +id }
    })

    if (foundCompany) {
        const company = await prisma.company.update({
            where: { id: +id },
            data: {
                companyName, companyAdress,companyState, companyUrl, companyType
            }
        })

        return res.json({
            status: 202,
            message: "company update",
            data: company,
        })
    } else {
        return res.json({
            status: 404,
            message: "company not found",
        })
    }

}

const Delete = async (req: Request, res: Response) => {
    const { id } = req.params

    const foundCompany = await prisma.company.findUnique({
        where: { id: +id }
    })

    if (foundCompany) {
        const company = await prisma.company.delete({
            where: { id: +id }
        })

        return res.json({
            status: 202,
            message: "company delete",
            data: company,
        })
    } else {
        return res.json({
            status: 404,
            message: "company not found",
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

