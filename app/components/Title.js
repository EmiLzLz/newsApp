export const Title = () => {
    const $title = document.createElement("div"),
     $logo = document.createElement("img"),
     $titleApp = document.createElement("h1");

    $title.classList.add("title");
    $logo.src="app/assets/logo.png";
    $logo.alt = "logo";
    $titleApp.innerText = "INTERNATIONAL NEWS";

    $title.appendChild($logo);
    $title.appendChild($titleApp);

    return $title;
}