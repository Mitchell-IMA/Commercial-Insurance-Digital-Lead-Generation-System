import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
  const body = await request.json();

  const { data: org } = await supabase
    .from("organizations")
    .insert({
      company_name: body.company,
      industry: body.industry
    })
    .select()
    .single();

  return NextResponse.json({
    success: true
  });
}
