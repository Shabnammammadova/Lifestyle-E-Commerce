"use server"

import prisma from "@/lib/db";
import { Product } from "@prisma/client";
import { revalidatePath } from "next/cache";


type Props = Omit<Product,'id' | 'createdAt' | 'updateAt'>
export async function createProduct(data:Props){
 const product = await prisma.product.create({
    data,
 });
 revalidatePath('/filter')
 return product
}