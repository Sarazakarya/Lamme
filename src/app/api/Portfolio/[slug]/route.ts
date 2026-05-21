import { NextRequest, NextResponse } from "next/server";
import { itemsProps } from "../../../../../lib/types/items";
import { connect } from "../../../../../lib/Data/db";
import portfolio from "@/models/portfolio";

export const GET = async (Request: NextRequest, { params }: itemsProps) => {
  try {
    const { slug } = await params;
    await connect();

    const Post = await portfolio.findOne({ slug: slug });
    if (!Post) {
      return NextResponse.json({ message: "Post not found" }, { status: 404 });
    }

    return new NextResponse(JSON.stringify(Post), { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching posts" },
      { status: 500 },
    );
  }
};
