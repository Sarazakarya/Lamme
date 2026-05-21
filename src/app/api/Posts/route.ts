import { NextRequest, NextResponse } from "next/server";
import { connect } from "../../../../lib/Data/db";
import posts from "@/models/posts";

export const GET = async (Request: NextRequest) => {
  try {
    // const url = new URL(Request.url);
    await connect();
    // const username = url.searchParams.get("username");

    // const query: { username?: string } = {};
    // if (username) {
    //   query.username = username;
    // }
    const Posts = await posts.find();

    return new NextResponse(JSON.stringify(Posts), { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching posts" },
      { status: 500 },
    );
  }
};
