export const Menu = () => {
    const $menu = document.createElement("nav");
    $menu.id ="menu";

    $menu.innerHTML = `
    <a href="#/">World</a>
    <a href="#/sports">Sports</a>
    <a href="#/technology">Technology</a>
    <a href="#/entertainment">Entertainment</a>
    <a href="#/science">Science</a>
    `
    return $menu;
}