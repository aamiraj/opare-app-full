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

interface upazilatype extends divisiontype {
  district_id: string;
}

export async function GET(req: NextRequest) {
  const district = req.nextUrl.searchParams.get("district");

  const jsonDirectory = path.join(process.cwd(), "src/data");
  const districtsContents = await fs.readFile(
    jsonDirectory + `/districts.json`,
    "utf8"
  );
  const upazilasContents = await fs.readFile(
    jsonDirectory + `/upazilas.json`,
    "utf8"
  );

  const districtsData = JSON.parse(districtsContents)[0].data;
  const upazilasData = JSON.parse(upazilasContents)[0].data;

  const foundDistrict: districttype = districtsData.find(
    (dist: districttype) => dist.name === district
  );

  const filteredUpazilas: Array<upazilatype> = upazilasData.filter(
    (upaz: upazilatype) => upaz.district_id === foundDistrict.id
  );

  const dataJson = JSON.stringify(filteredUpazilas);
  return NextResponse.json({ dataJson });
}
