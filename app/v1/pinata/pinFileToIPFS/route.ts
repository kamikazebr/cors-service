import { NextResponse } from "next/server";
import pinataSDK from "@pinata/sdk";
import { env } from "~/env.mjs";
import { Stream } from "stream";
import * as parse from "parse-multipart";

export const runtime = "nodejs";

const pinata = new pinataSDK({ pinataJWTKey: env.PINATA_JWT });

export async function POST(request: Request) {
  const formData = await request.text();

  console.log("FormData:", formData);

  // const stream = await formData.arrayBuffer();

  // const buffer = Buffer.from(formData);

  // const boundary = parse.getBoundary(formData.type);
  // const parts = parse.Parse(buffer, boundary);

  // if (parts.length === 0) {
  //   return NextResponse.json({ error: "No parts found" }, { status: 400 });
  // }

  // const part = parts[0];
  // console.log("Part:", part);

  // const resPinata = await pinata.pinFileToIPFS(
  //   Stream.Readable.from(part.data),
  //   {
  //     pinataMetadata: { name: part.filename },
  //   }
  // );

  // return NextResponse.json(resPinata, { status: 200 });
}
