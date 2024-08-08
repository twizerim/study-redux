import News from "./shared/news";


export default function NewsContent() {
    
  return (
    <div className="flex justify-center items-center h-[70vh]">
      <News
        title="Information Of Weekly Internship"
        description="Thanks every one I would like to talk to you about what i learnt in two week. "
        date='9/augast/2024'
        link="https://dev.to/twizeyimana_gedeon_ef51c1/what-i-learnt-from-my-first-week-in-awesomity-as-an-intern-2abd"
      />
    </div>
  );
}
