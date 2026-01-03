// api/users/id-check.js
import { supabase } from '../../lib/db';

export default async function handler(req, res) {
  const { user_id } = req.query;
  const { data } = await supabase
    .from('users')
    .select('id')
    .eq('user_id', user_id)
    .single();

  res.json({ exists: !!data });
}
