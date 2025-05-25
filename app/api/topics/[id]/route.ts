import {NextRequest, NextResponse} from "next/server";
import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import {ITopicCreate} from "@/app/api/topics/route";

interface IPutTopicParams {
  params: {
    id: string;
  }
}

export const PUT = async (req: NextRequest, { params }: IPutTopicParams) => {
  try {
    const { id } = params;

    const { title, description }: ITopicCreate = await req.json();

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