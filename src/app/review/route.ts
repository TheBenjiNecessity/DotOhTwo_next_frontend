import { type NextApiRequest, type NextApiResponse } from "next";
import { request } from "@/services/nextRestApi.service";

export async function GET(req: NextApiRequest) {
    return request(req);
}
