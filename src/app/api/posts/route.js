import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/utils/db";
import Post from "@/models/postModel.js";

export const GET = async (request) => {
  const url = new URL(request.url);

  const username = url.searchParams.get("username");

  try {
    await connectDB();
    const posts = await Post.find(username && { username });

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error!", { status: 500, error: error });
  }
};

export const POST = async (request) => {
  const body = await request.json();

  const newPost = new Post(body);

  try {
    await connectDB();

    await newPost.save();

    return new NextResponse("Post has been created!", { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error!", { status: 500, error: error });
  }
};
