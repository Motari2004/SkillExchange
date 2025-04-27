import { PrismaClient } from '@prisma/client'; // Or your chosen database ORM
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const { firstName, lastName, email, password, userType } = await req.json();

    // Hash the password for security
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user to the database
    const newUser = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        password: hashedPassword, // Store the hashed password
        userType,
      },
    });

    return new Response(JSON.stringify({ message: "User created successfully", user: newUser }), {
      status: 201,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Error creating user" }), {
      status: 500,
    });
  }
}
