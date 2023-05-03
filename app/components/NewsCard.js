export const NewsCard = (props) => {
  let { title, content, imageUrl, author, date, readMoreUrl } = props;

  return `
    <article class="news-card">
        <img src="${imageUrl}" alt="${title}"> 
        <div class="main-info">
            <a href="${readMoreUrl}" target="_blank">${title}</a>
        </div>
        <div class="description">
            <p>${content}</p>
        </div> 
        <div class="more-info">
            <p><em>By ${author}</em></p>
            <time><em>${date}</em></time>
        </div> 
    </article>
    `;
};
