import path from "path";
import { promises as fs } from "fs";
import { NextRequest, NextResponse } from "next/server";

interface divisiontype {
  id: string;
  name: string;
  bn_name: string;
}

interface districttype extends divisiontype {
  division_id: string;
}

export async function GET(req: NextRequest) {
  const division = req.nextUrl.searchParams.get("division");

  const jsonDirectory = path.join(process.cwd(), "src/data");
  const districtsContents = await fs.readFile(
    jsonDirectory + `/districts.json`,
    "utf8"
  );
  const divisionsContents = await fs.readFile(
    jsonDirectory + `/divisions.json`,
    "utf8"
  );

  const districtsData = JSON.parse(districtsContents)[0].data;
  const divisionsData = JSON.parse(divisionsContents)[0].data;

  const foundDivision: divisiontype = divisionsData.find(
    (div: divisiontype) => div.name === division
  );

  const filteredDistricts: Array<districttype> = districtsData.filter(
    (dist: districttype) => dist.division_id === foundDivision.id
  );

  const dataJson = JSON.stringify(filteredDistricts);
  return NextResponse.json({ dataJson });
}
