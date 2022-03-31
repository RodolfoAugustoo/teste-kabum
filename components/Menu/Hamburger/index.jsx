import { useState } from "react";
import * as MH from "./style";

export default function IconMenuHamburger() {
  const [isClosed, setIsClosed] = useState(true);

  return (
    <>
      <MH.Menu onClick={() => setIsClosed(!isClosed)}>
        <MH.MenuItem></MH.MenuItem>
        <MH.MenuItem></MH.MenuItem>
        <MH.MenuItem></MH.MenuItem>
      </MH.Menu>
      <MH.MenuContent closed={isClosed}>
        <MH.ButtonClose onClick={() => setIsClosed(true)}>x</MH.ButtonClose>
        <MH.ContentTitle>Olá. Faça seu login</MH.ContentTitle>
        <MH.MenuContentList>
          <MH.MenuContentListItem>
            <MH.MenuContentListLink href=''>Minha conta</MH.MenuContentListLink>
          </MH.MenuContentListItem>
          <MH.MenuContentListItem>
            <MH.MenuContentListLink href=''>menu 2</MH.MenuContentListLink>
          </MH.MenuContentListItem>
          <MH.MenuContentListItem>
            <MH.MenuContentListLink href=''>menu 3</MH.MenuContentListLink>
          </MH.MenuContentListItem>
        </MH.MenuContentList>
      </MH.MenuContent>
    </>
  );
}
