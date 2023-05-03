import { Menu } from "./Menu.js";
import { Title } from "./Title.js";

export const Header = () => {
    const $header = document.createElement("header");
    $header.id = "header"
     
    $header.appendChild(Title());
    $header.appendChild(Menu());

    return $header;
}