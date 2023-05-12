import prisma from "@lib/prisma";
import { NextApiRequest } from "next";
import { ApiError } from "next/dist/server/api-utils";
import { NextRequest, NextResponse } from "next/server";
interface RequestBody {
  id: string;
  email: string;
  provider: string;
  role: string;
}
export async function POST(req: NextRequest) {
  // getUser or Create
  const body: RequestBody = await req.json();
  let status = "login";
  let user;
  try {
    user = await prisma.user.findFirst({
      where: {
        email: body.email,
      },
    });

    if (user?.provider !== body.provider) {
      return NextResponse.json({ message: `${body.email}로 가입된 다른 소셜 계정이 존재합니다.` });
    }

    if (!user) {
      user = await prisma.user.create({ data: { ...body } });
      status = "signUp";
    }
  } catch (error: any) {
    return NextResponse.json({ message: "internal Server Error" });
  }
  const { password, ...result } = user;
  return NextResponse.json({ ...result, status });
}
