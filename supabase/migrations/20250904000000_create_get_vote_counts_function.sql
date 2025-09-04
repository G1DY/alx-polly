CREATE OR REPLACE FUNCTION get_vote_counts(poll_id_param uuid)
RETURNS TABLE (
  option_id uuid,
  option_text text,
  vote_count bigint
) AS $$
BEGIN
  RETURN QUERY
  SELECT
    po.id AS option_id,
    po.text AS option_text,
    COUNT(v.id) AS vote_count
  FROM
    poll_options po
  LEFT JOIN
    votes v ON po.id = v.option_id
  WHERE
    po.poll_id = poll_id_param
  GROUP BY
    po.id, po.text
  ORDER BY
    po.id;
END;
$$ LANGUAGE plpgsql;
