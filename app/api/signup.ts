import prisma from "@/lib/prisma"
import bcrypt from "bcryptjs"

interface SignupRequestBody {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  userType: string;
}

export async function POST(req: Request, res: Response): Promise<Response> {
  try {
    const { firstName, lastName, email, password, userType }: SignupRequestBody = await req.json();

    // Hash the password
    const hashedPassword = bcrypt.hashSync(password, 10);

    // Create the user
    const newUser = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        password: hashedPassword,
        userType,
      },
    });

    return new Response(JSON.stringify(newUser), { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
