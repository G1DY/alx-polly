-- Create the polls table
CREATE TABLE polls (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    question text NOT NULL,
    user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
    created_at timestamptz DEFAULT now()
);

-- Create the poll_options table
CREATE TABLE poll_options (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    text text NOT NULL,
    poll_id uuid REFERENCES polls(id) ON DELETE CASCADE
);

-- Create the votes table
CREATE TABLE votes (
    id bigserial PRIMARY KEY,
    user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
    option_id uuid REFERENCES poll_options(id) ON DELETE CASCADE,
    poll_id uuid REFERENCES polls(id) ON DELETE CASCADE,
    created_at timestamptz DEFAULT now(),
    UNIQUE(user_id, poll_id) -- Ensures a user can only vote once per poll
);

-- Enable Row Level Security
ALTER TABLE polls ENABLE ROW LEVEL SECURITY;
ALTER TABLE poll_options ENABLE ROW LEVEL SECURITY;
ALTER TABLE votes ENABLE ROW LEVEL SECURITY;
