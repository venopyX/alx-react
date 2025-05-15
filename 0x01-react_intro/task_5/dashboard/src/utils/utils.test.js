import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

test("returns current year", () => {
  expect(getFullYear()).toBe(2021);
});

test("correct footer copy", () => {
  expect(getFooterCopy(true)).toBe("ALX");
  expect(getFooterCopy(false)).toBe("ALX main dashboard");
});

test("returns right notification", () => {
  expect(getLatestNotification()).toBe(
    "<strong>Urgent Requirement</strong> - complete by EOD"
  );
});
