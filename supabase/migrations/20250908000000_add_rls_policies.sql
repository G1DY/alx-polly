-- Add the missing user_id column to the polls table
ALTER TABLE public.polls
ADD COLUMN IF NOT EXISTS user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE;

-- Revoke existing permissive policies to enforce stricter access control
DROP POLICY IF EXISTS "Allow all users to see all polls" ON polls;
DROP POLICY IF EXISTS "Allow all users to see all poll options" ON poll_options;

-- Add policies for the "polls" table
CREATE POLICY "Allow users to create their own polls"
ON polls
FOR INSERT
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Allow users to view their own polls"
ON polls
FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Allow users to delete their own polls"
ON polls
FOR DELETE
USING (auth.uid() = user_id);

-- Add policies for the "poll_options" table
CREATE POLICY "Allow users to create options for their own polls"
ON poll_options
FOR INSERT
WITH CHECK (
  EXISTS (
    SELECT 1
    FROM polls
    WHERE polls.id = poll_options.poll_id AND polls.user_id = auth.uid()
  )
);

-- A user can see a poll's options if they can see the poll itself.
-- This policy allows the join query on the dashboard to work correctly.
CREATE POLICY "Allow users to view options for polls they can see"
ON poll_options
FOR SELECT
USING (
  EXISTS (
    SELECT 1
    FROM polls
    WHERE polls.id = poll_options.poll_id
  )
);
