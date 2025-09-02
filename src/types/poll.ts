export type PollOption = {
  id: string;
  text: string;
  poll_id: string;
};

export type Poll = {
  id: string;
  question: string;
  poll_options: PollOption[];
  created_at: string;
  user_id: string;
};
