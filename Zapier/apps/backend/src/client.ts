import {PrismaClient} from "@prisma/client";
class PrismaSingleton {
    private static instance: PrismaClient;
    private constructor() { 
    }
    public static getInstance() {
        if(!PrismaSingleton.instance){
            PrismaSingleton.instance = new PrismaClient()
        }
    }
}
export const prisma = PrismaSingleton.getInstance(); 