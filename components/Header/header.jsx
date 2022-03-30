import { useEffect, useState } from "react";
import HeaderDefault from "./Default";
import HeaderMobile from "./Mobile";
import HeaderSticky from "./Sticky";
import SubMenu from "./SubMenu";

export default function Header() {
  const [width, setWidth] = useState(null);

  const handleResize = () => setWidth(window.innerWidth);

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
  }, []);

  const renderHeader = () => {
    if (width !== null) {
      if (width > 720)
        return (
          <>
            <HeaderDefault /> <SubMenu />
          </>
        );
      return <HeaderMobile />;
    }
    return null;
  };

  return renderHeader();
}
