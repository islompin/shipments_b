/*
  Warnings:

  - The primary key for the `Loads` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `loadId` on the `Loads` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Loads" DROP CONSTRAINT "Loads_pkey",
DROP COLUMN "loadId",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Loads_pkey" PRIMARY KEY ("id");
