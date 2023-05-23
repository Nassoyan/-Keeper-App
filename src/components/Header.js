import React from "react";
import HighlightIcon from "@mui/icons-material/Highlight";
import Avatar from "@material-ui/core/Avatar";

function Header() {
  return (
    <header>
      <h1>
        <HighlightIcon />
        Keeper
        <Avatar
          alt="Tigran"
          src="https://i.pinimg.com/280x280_RS/da/bc/58/dabc58c3c5817afef363c83c29c8f6ee.jpg"
        />
      </h1>
    </header>
  );
}

export default Header;
