import { signJwtAccessToken } from "@lib/jwt";
import prisma from "@lib/prisma";
import * as bcrpyt from "bcrypt";
import { NextRequest } from "next/server";
interface RequestBody {
  email: string;
  password: string;
}
export async function POST(request: NextRequest) {
  const body: RequestBody = await request.json();

  const user = await prisma.user.findFirst({
    where: {
      email: body.email,
    },
  });

  if (user && (await bcrpyt.compare(body.password, user.password))) {
    const { password, ...userWithoutPass } = user;
    const accessToken = signJwtAccessToken(userWithoutPass);
    const result = {
      ...userWithoutPass,
      accessToken,
    };
    return new Response(JSON.stringify(result));
  } else return new Response(JSON.stringify(null));
}
