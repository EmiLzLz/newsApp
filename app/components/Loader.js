export const Loader = () => {
    const $loader = document.createElement("div"),
     $loadAnim = document.createElement("div"),
     $loadContainer = document.createElement("div"),
     $loadImg = document.createElement("img"),
     $message = document.createElement("p");

    $loader.classList.add("loader");
    $loadAnim.classList.add("loader-anim");
    $loadContainer.classList.add("img-contain");
    $loadImg.src = "app/assets/logo.png";
    $loadImg.alt = "page logo";
    $message.innerText = "Loading...";

    $loadContainer.appendChild($loadImg);
    $loadContainer.appendChild($message);
    $loader.appendChild($loadAnim);
    $loader.appendChild($loadContainer);

    return $loader;
}