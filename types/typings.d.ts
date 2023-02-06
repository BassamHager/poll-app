export interface IPollAnswer {
  value: string;
  id: string;
}
export interface IPollVote extends IPollAnswer {
  isSelected: boolean;
}
export interface IPollResultCol extends IPollVote {
  votesCount: number;
}
