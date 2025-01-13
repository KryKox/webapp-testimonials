/*
  Warnings:

  - You are about to drop the column `companyAddress` on the `Workspace` table. All the data in the column will be lost.
  - You are about to drop the column `companyName` on the `Workspace` table. All the data in the column will be lost.
  - Added the required column `workspaceName` to the `Workspace` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Workspace" DROP COLUMN "companyAddress",
DROP COLUMN "companyName",
ADD COLUMN     "workspaceName" TEXT NOT NULL;
