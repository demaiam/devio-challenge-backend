/*
  Warnings:

  - You are about to alter the column `imageUrl` on the `OrderProducts` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.

*/
-- AlterTable
ALTER TABLE "OrderProducts" ALTER COLUMN "imageUrl" SET DATA TYPE VARCHAR(255);
