import { NextRequest, NextResponse } from "next/server";
import { connect } from "../../../../lib/Data/db";
import portfolio from "@/models/portfolio";
export const GET = async (Request: NextRequest) => {
  try {
    await connect();
    const Portfolio = await portfolio.find();

    return new NextResponse(JSON.stringify(Portfolio), { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching posts" },
      { status: 500 },
    );
  }
};
