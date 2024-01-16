import { request } from "@/services/nextRestApi.service";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest): Promise<Response> {
    return request(req);
}
