'use server';
import { connect } from "@/DB/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";


connect();


export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { firstname, lastname, username, email, password } = reqBody;

        // check if user already exists
        const user = await User.findOne({ email })

        if (user) {
            return NextResponse.json({ error: "User already exists" }, { status: 400 })
        }

        //Bcrypting User password 
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        // Storing User Data In a newUser Variable 
        const newUser = new User({
            firstname,
            lastname,
            username,
            email,
            password: hashedPassword
        });
        // console.log("newUser", newUser)

        // Saving Data In MongoDB Database 
        const savedUser = await newUser.save();
        // console.log("savedUser", savedUser);

        //send verification email
        // await sendEmail({email, emailType: "VERIFY", userId: savedUser._id})

        return NextResponse.json({
            message: "User created successfully",
            success: true,
            savedUser
        })




    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });

    }
}