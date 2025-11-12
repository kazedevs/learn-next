import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const { username, password } = await req.json();
    
    if (!username || !password) {
      return NextResponse.json(
        { error: 'Username and password are required' },
        { status: 400 }
      );
    }

    await prisma.user.create({
      data: { username, password },
    });

    return NextResponse.json(
      { message: 'User created' },
      { status: 201 }
    );
    
  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json(
      { error: 'Failed to create user' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
