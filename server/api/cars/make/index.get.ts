import prisma from "~/utils/prisma";

export default defineEventHandler(async (event) => {
	const make = await prisma.carMake.findMany();

	return make 
})
  