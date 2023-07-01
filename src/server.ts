import cors from 'cors';
import express, { Application } from 'express';
import  {PrismaClient } from '@prisma/client'
import router from './routers';

const app: Application = express();
const PORT = process.env.PORT || 8080
const prisma = new PrismaClient()

app.use(express.json());
app.use(cors())
app.use(router)

async function main() {
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})

app.listen(PORT, (): void => console.log(`http://localhost:${PORT}`));
