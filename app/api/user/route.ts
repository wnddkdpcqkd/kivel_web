import prisma from "@lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import * as bcrypt from "bcrypt";
import { use } from "react";
interface RequestBody {
  id: string;
  email: string;
  provider: string;
  role: string;
}
export async function POST(request: NextRequest) {
  // getUser or Create
  const body: RequestBody = await request.json();
  let user = await prisma.user.findFirst({
    where: {
      email: body.email,
    },
  });

  if (!user) {
    user = await prisma.user.create({
      data: { ...body },
    });
  }

  const { password, ...result } = user;
  return new NextResponse(JSON.stringify(result));
}
