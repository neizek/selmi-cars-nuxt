import type { UserSignUpPayload } from "~/types/users";
import { query } from "~/utils/db"

export default defineEventHandler(async (event) => {
	const user: UserSignUpPayload = await readBody(event)

	query (`INSERT INTO users (firstname, lastname, email, password)
	VALUES ('${user.firstName}', '${user.lastName}', '${user.email}', '${user.password}');`)
	.then(response => {
		console.log('Пользователь добавлен')
	})
	.catch(error => {
		throw createError({
			statusCode: 500,
			message: error
		})
	});
})
  