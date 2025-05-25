import {NextRequest, NextResponse} from "next/server";
import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";

export interface ITopicCreate {
  title: string;
  description: string;
}

export const POST = async (req: NextRequest) => {
  try {
    const { title, description }: ITopicCreate = await req.json();

    await connectMongoDB();

    await Topic.create({
      title,
      description,
    });

    return NextResponse.json({
      message: "Topic created",
    });

  } catch (err) {
    console.error(err);

    return NextResponse.json(
      {
        message: 'Topic not created',
      },
      {
        status: 500,
      }
    );
  }
}

export const GET = async () => {
  try {
    await connectMongoDB();

    const topics = await Topic.find();

    return NextResponse.json(topics);

  } catch (err) {
    console.error(err);

    return NextResponse.json(
      {
        message: 'Topics not found',
      },
      {
        status: 500,
      }
    );
  }
}

export const DELETE = async (req: NextRequest) => {
  try {
    const id : string | null = req.nextUrl.searchParams.get("id");

    await connectMongoDB();

    if (!id) {
      return NextResponse.json(
        {
          message: 'Topic not found',
        },
        {
          status: 400,
        }
      );
    }

    const isDeleted = await Topic.findByIdAndDelete(id);

    if (!isDeleted) {
      return NextResponse.json(
        {
          message: 'Topic not found',
        },
        {
          status: 404,
        }
      );

    }

    return NextResponse.json(
      {
        message: 'Topic deleted',
      }
    );

  } catch (err) {
    console.error(err);

    return NextResponse.json(
      {
        message: 'Topic not found',
      },
      {
        status: 400,
      }
    );
  }
}