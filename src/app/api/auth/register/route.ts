import { NextRequest, NextResponse } from "next/server";
import { connect } from "../../../../../lib/Data/db";
import { RegisterT } from "../../../../../lib/types/Auth";
import bcrypt from "bcryptjs";
import users from "@/models/users";

export const POST = async (request: NextRequest) => {
  try {
    const body: RegisterT = await request.json();
    if (!body.email || !body.password || !body.name) {
      return NextResponse.json({ message: "" }, { status: 400 });
    }

    await connect();

    const existingUser = await users.findOne({ email: body.email });
    if (existingUser) {
      return NextResponse.json(
        { message: "This Account Already Register!" },
        { status: 400 },
      );
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(body.password, salt);
    const newUser = await users.create({
      email: body.email,
      password: hashedPassword,
      name: body.name,
    });

    return NextResponse.json(
      {
        message: "The Account Created Successfully! ",
        users: {
          username: newUser.name,
          email: newUser.email,
        },
      },
      { status: 201 },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
};
