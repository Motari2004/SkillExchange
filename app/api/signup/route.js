import prisma from "@/lib/prisma"
import bcrypt from "bcryptjs"

export async function POST(req, res) {
  try {
    const { firstName, lastName, email, password, userType } = await req.json()

    // Hash the password
    const hashedPassword = bcrypt.hashSync(password, 10)

    // Create the user
    const newUser = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        password: hashedPassword,
        userType,
      },
    })

    return res.status(200).json(newUser)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
