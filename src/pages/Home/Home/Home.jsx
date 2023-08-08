
import Banner from "../Banner/Banner";
import Categories from "../Category/Categories";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopulatMenu/PopularMenu";


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Categories></Categories>
      <PopularMenu></PopularMenu>
      <Featured></Featured>
    </div>
  );
};

export default Home;
