import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { data: org, error } = await supabase
      .from("organizations")
      .insert({
        company_name: body.company,
        industry: body.industry
      })
      .select()
      .single();

    if (error) {
      console.error(error);
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      organizationId: org.id
    });
  } catch (err) {
    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}
