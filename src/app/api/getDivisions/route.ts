import path from "path";
import { promises as fs } from "fs";
import { NextResponse } from "next/server";

export async function GET() {
  const jsonDirectory = path.join(process.cwd(), "src/data");
  const fileContents = await fs.readFile(
    jsonDirectory + `/divisions.json`,
    "utf8"
  );
  const parseData = JSON.parse(fileContents);
  const dataParsed = parseData[0].data;
  const dataJson = JSON.stringify(dataParsed);
  return NextResponse.json({ dataJson });
}
