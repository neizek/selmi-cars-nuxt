import { query } from "~/utils/db"

function getUserByEmail(email: string) {
	return query(`SELECT * FROM users WHERE email = '${email}'`)
}

export default defineEventHandler(async (event) => {
	const body = await readBody(event)
	const users = await getUserByEmail(body.email);
	const user = users[0];

	if (user !== undefined && user.password === body.password) {
	  	await setUserSession(event, {
			user: {
				id: user.id,
		 		name: user.name,
				email: user.email
			}
	  	})

	  return {}
	}

	throw createError({
		statusCode: 401,
		message: 'Bad credentials'
	})
})
  