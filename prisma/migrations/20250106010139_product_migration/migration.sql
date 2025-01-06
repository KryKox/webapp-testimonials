-- CreateEnum
CREATE TYPE "ProductType" AS ENUM ('SHOE', 'CLOTHING', 'ELECTRONIC');

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "stock" INTEGER NOT NULL,
    "discount" DOUBLE PRECISION,
    "mainImage" TEXT NOT NULL,
    "subImages" TEXT[],
    "categoryId" INTEGER NOT NULL,
    "type" "ProductType" NOT NULL,
    "shoeDetailsId" INTEGER,
    "clothingDetailsId" INTEGER,
    "electronicDetailsId" INTEGER,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ShoeDetails" (
    "id" SERIAL NOT NULL,
    "sizes" DOUBLE PRECISION[],

    CONSTRAINT "ShoeDetails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClothingDetails" (
    "id" SERIAL NOT NULL,
    "sizes" TEXT[],

    CONSTRAINT "ClothingDetails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ElectronicDetails" (
    "id" SERIAL NOT NULL,
    "model" TEXT NOT NULL,

    CONSTRAINT "ElectronicDetails_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_shoeDetailsId_fkey" FOREIGN KEY ("shoeDetailsId") REFERENCES "ShoeDetails"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_clothingDetailsId_fkey" FOREIGN KEY ("clothingDetailsId") REFERENCES "ClothingDetails"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_electronicDetailsId_fkey" FOREIGN KEY ("electronicDetailsId") REFERENCES "ElectronicDetails"("id") ON DELETE CASCADE ON UPDATE CASCADE;
