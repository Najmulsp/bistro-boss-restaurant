import useMenu from "../../hooks/useMenu";
import MenuItems from "../../shared/MenuItems";

const PopularMenu = () => {
  const menu = useMenu();
  console.log(menu);
  const popular = menu[0].filter((item) => item.category === "popular");
  console.log(popular);
  return (
    <div>
      <MenuItems items={popular} btnText="View Full Menu"></MenuItems>    
    </div>
  );
};

export default PopularMenu;
