import "./home.scss";

const lists: string[] = ["新着", "ソート", "カテゴリ", "ランダム"];

const Home = () => {
  console.log('Home');
  return (
    <div className="home">
      <div className="home__lists_wrap responsive">
        {lists.map((title, i) => {
          return (
            <div className="list" key={`$lists_${i}`}>
              {title}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
