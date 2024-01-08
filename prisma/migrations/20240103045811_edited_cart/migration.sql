/*
  Warnings:

  - A unique constraint covering the columns `[product_id,user_id]` on the table `Cart` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "images" (
    "id" SERIAL NOT NULL,
    "preview_image" VARCHAR,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "images_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Cart_product_id_user_id_key" ON "Cart"("product_id", "user_id");

-- AddForeignKey
ALTER TABLE "images" ADD CONSTRAINT "images_id_fkey" FOREIGN KEY ("id") REFERENCES "Product"("product_id") ON DELETE NO ACTION ON UPDATE NO ACTION;
