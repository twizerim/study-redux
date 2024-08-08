import News from "./shared/news";

export default function NewsContent() {
  return (
    <div className="flex justify-center items-center h-[70vh]">
      <News
        title="Information Of Weekly Internaship"
        description="The error message Your test suite must contain at least one tes indicates that Jest did not detect any tests in your test  the code you provided does include a tes so the issue might be due to the structure or setup of your testing. "
        date="8.Augast.2024"
        link="https://dev.to/twizeyimana_gedeon_ef51c1/what-i-learnt-from-my-first-week-in-awesomity-as-an-intern-2abd"
      />
    </div>
  );
}
