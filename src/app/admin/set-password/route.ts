import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SECRET_KEY!,
);

export async function POST(request: NextRequest) {
  const token = request.headers.get('x-setup-token');

  if (token !== process.env.SUPABASE_SETUP_TOKEN) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { error } = await supabaseAdmin.auth.admin.updateUserById(
    '86d24942-79b6-4711-b418-3a90f7ceda9f',
    {
      password: process.env.ADMIN_TEMP_PASSWORD!,
    },
  );

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  return NextResponse.json({ success: true });
}
