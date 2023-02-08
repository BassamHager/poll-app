// utils
import { resetVoting } from "../resetVoting";

jest.mock("../resetVoting.ts");
describe("resetVoting util", () => {
  it("should be exported & can be called", () => {
    expect.assertions(1);
    resetVoting();

    expect(resetVoting).toHaveBeenCalledTimes(1);
  });
});
