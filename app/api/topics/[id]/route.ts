import {NextRequest, NextResponse} from "next/server";
import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";

interface IPutTopicParams {
  params: {
    id: string;
  }
}

interface IUpdateTopicBody {
  title: string;
  description: string;
}

export const PUT = async (req: NextRequest, { params }: IPutTopicParams) => {
  try {
    const { id } = params;

    const { title, description }: IUpdateTopicBody = await req.json();

    await connectMongoDB();

    const isTopicFound = await Topic.findByIdAndUpdate(id, { title, description });

    if (!isTopicFound) {
      return NextResponse.json(
        {
          message: 'Topic not found',
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json({
      message: 'Topic updated',
    });

  } catch (err) {
    console.error(err);

    return NextResponse.json(
      {
        message: 'Topic not found',
      },
      {
        status: 404,
      }
    );
  }
}