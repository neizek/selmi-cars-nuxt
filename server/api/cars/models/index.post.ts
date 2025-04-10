import prisma from "~/utils/prisma";

export default defineEventHandler(async (event) => {
	const models = await prisma.carModel.findMany();

	return models 
})
  