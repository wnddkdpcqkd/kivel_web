import prisma from "@lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import * as bcrypt from "bcrypt";
import { use } from "react";
interface RequestBody {
  email: string;
  password: string;
}
export async function POST(request: NextRequest) {
  const body: RequestBody = await request.json();

  const user = await prisma.user.create({
    data: {
      email: body.email,
      password: await bcrypt.hash(body.password, 10),
    },
  });

  const { password, ...result } = user;
  return new NextResponse(JSON.stringify(result));
}
