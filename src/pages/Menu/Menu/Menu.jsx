import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertBg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaBg from "../../../assets/menu/pizza-bg.jpg";
import saladBg from "../../../assets/menu/salad-bg.jpg";
import soupBg from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  // console.log(dessert);
  const soup = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuImg} title={"our menu"}></Cover>
      <SectionTitle
        subHeading={"Don't Miss"}
        heading={"Today's Offer"}
      ></SectionTitle>

      {/* offered item */}
      <MenuCategory items={offered}></MenuCategory>

      {/* dessert item */}
      <MenuCategory
        items={dessert}
        title={"dessert"}
        img={dessertBg}
      ></MenuCategory>

      {/* pizza */}
      <MenuCategory items={pizza} title={"pizza"} img={pizzaBg}></MenuCategory>

      {/* salad */}
      <MenuCategory items={salad} title={"salad"} img={saladBg}></MenuCategory>

      {/* soup */}
      <MenuCategory items={soup} title={"soup"} img={soupBg}></MenuCategory>
    </div>
  );
};

export default Menu;
