// import User from "@/models/userModel";
// import connectDB from "@/utils/db";
// import bcrypt from "bcryptjs";
// import { NextRequest, NextResponse } from "next/server";

// export const POST = async (request) => {
//   const { username, password } = await request.json();

//   await connectDB();

//   const hashedPassword = await bcrypt.hash(password, 10);

//   const newUser = await new User({
//     username,
//     email,
//     password: hashedPassword,
//   });

//   try {
//     await newUser.save();
//     return new NextResponse("User created successfully!", { status: 201 });
//   } catch (error) {
//     return new NextResponse(error, { status: 500 });
//   }
// };
