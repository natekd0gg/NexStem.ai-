import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI();

export const POST = async (req: Request) => {
  try {
    const { userId } = await auth();
    const body = await req.json();
    const { prompt, amount = 1, resolution = "512x512" } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!openai.apiKey) {
      return new NextResponse("OpenAI API Key not configured", {
        status: 500,
      });
    }

    if (!prompt) {
      return new NextResponse("Prompt is required", { status: 400 });
    }

    if (!amount) {
      return new NextResponse("Amount is required", { status: 400 });
    }

    if (!resolution) {
      return new NextResponse("Resolution is required", { status: 400 });
    }

    const image = await openai.images.generate({
      prompt,
      n: parseInt(amount, 10),
      size: resolution,
    });

    console.log(image.data[0].url);

    return NextResponse.json(image.data);
  } catch (error) {
    console.log("[IMAGE_ERROR]", error);

    return new NextResponse("Internal error", { status: 500 });
  }
};
