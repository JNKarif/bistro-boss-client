
import Banner from "../Banner/Banner";
import Categories from "../Category/Categories";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopulatMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Categories></Categories>
      <PopularMenu></PopularMenu>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
