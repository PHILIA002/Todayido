// api/users/id-check.js
import { supabase } from '../../lib/db.js';

export default async function handler(req, res) {
  const { user_id } = req.query;

  const { data, error } = await supabase
    .from('users')
    .select('id')
    .eq('user_id', user_id)
    .single();

  if (error && error.code !== 'PGRST116') {
    return res.status(500).json({ error: error.message });
  }

  res.status(200).json({ exists: !!data });
}
