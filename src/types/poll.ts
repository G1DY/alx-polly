export type PollOption = {
  id: string;
  text: string;
  poll_id: string;
};

export type Poll = {
  id: string;
  question: string;
  poll_options: {
    id: string;
    text: string;
  }[];
  created_at: string;
  user_id: string;
};
