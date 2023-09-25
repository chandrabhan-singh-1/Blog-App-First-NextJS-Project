import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/utils/db";
import Post from "@/models/postModel.js";

export const GET = async (request, { params }) => {
  try {
    const { id } = params;
    await connectDB();
    const post = await Post.findById(id);

    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error!", { status: 500, error: error });
  }
};

export const DELETE = async (request, { params }) => {
  const { id } = params;
  try {
    await connectDB();
    await Post.findByIdAndDelete(id);

    return new NextResponse("Post deleted successfully!", { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error!", { status: 500, error: error });
  }
};
