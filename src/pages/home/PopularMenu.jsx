import useMenu from "../../hooks/useMenu";
import MenuItems from "../../shared/MenuItems";

const PopularMenu = () => {
  const menu = useMenu();
  const popular = menu[0].filter((item) => item.category === "popular");
  
  return (
    <div>
      <MenuItems items={popular} btnText="View Full Menu"></MenuItems>    
    </div>
  );
};

export default PopularMenu;
