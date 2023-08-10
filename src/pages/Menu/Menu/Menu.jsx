import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from '../../../assets/menu/banner3.jpg'
import pizzaBg from '../../../assets/menu/pizza-bg.jpg';
import saladBg from '../../../assets/menu/salad-bg.jpg'
import soupBg from '../../../assets/menu/soup-bg.jpg'
import PopularMenu from "../../Home/PopulatMenu/PopularMenu";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuImg} title={"our menu"}></Cover>
      
      <Cover img={pizzaBg} title={"our pizza"}></Cover>
      <PopularMenu></PopularMenu>
      <Cover img={saladBg} title={"our Salad"}></Cover>
      <PopularMenu></PopularMenu>
      <Cover img={soupBg} title={"our soup"}></Cover>
      <PopularMenu></PopularMenu>
    </div>
  );
};

export default Menu;
