import { PrismaClient } from "@prisma/client/extension";

class PrismaSingleton {
    private static instanse: PrismaClient;
    private constructor() {}
    public static getInstance(){
        if(!this.instanse){
        this.instanse = new PrismaClient;
        }
        return this.instanse
    }
}
export const prisma: PrismaClient = PrismaSingleton.getInstance();