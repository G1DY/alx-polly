CREATE OR REPLACE FUNCTION get_active_users_count()
RETURNS integer AS $$
BEGIN
  RETURN (
    SELECT COUNT(DISTINCT user_id)
    FROM (
      SELECT user_id FROM polls WHERE user_id IS NOT NULL
      UNION
      SELECT user_id FROM votes WHERE user_id IS NOT NULL
    ) AS active_users
  );
END;
$$ LANGUAGE plpgsql;
