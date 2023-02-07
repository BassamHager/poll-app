export const resetVoting = (): void => {
  const votes: NodeListOf<HTMLElement> =
    document.getElementsByName("voteOption");
  votes.forEach((el) => {
    (el as HTMLInputElement).checked = false;
  });
};
