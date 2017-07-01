export function vkApi(query, html_func) {
    window.VK.init({
        apiId: 6092424
    });

    console.log('qa', query, window.VK.Api);

    let url = 'https://api.vk.com/method/wall.search?owner_id=-144799026&query=' + encodeURIComponent(query) + '&access_token=6acba4a46acba4a46acba4a4986a97522c66acb6acba4a4339889facb5280d2e572de4c';

    $.ajax({
        url: url,
        dataType: 'jsonp',
        success: function(info){

            const {response} = info;
            const data = {
                count: response[0],
                items: response.slice(1, response.length)
            };

            if (data.count > 0) {
                html_func(data.items);
            }
        }
    });
}

export function html_func_news(items) {
    let html = '';

    items.forEach(el => {

        console.log(el);

        let text = el.text;
        let reg = /\[([^\[\]]+)\|([^\[\]]+)\]/g;
        text = text.replace(reg, replacer);
        text = text.replace(/#[^\s]+/g, '');
        text = text.replace(/^(.{250}[^\s]*).*/, "$1...");

        text = text.replace(/^(.+?)<br\s?\/?>/g, "<b class='post__title'>$1</b> <br>");

        text = text.trim();

        let link = `https://vk.com/wall${el.from_id}_${el.id}`;

        let textElement = text ? `<div class="post__text">${text}</div>` : '';

        html += `
      <div class="post${!text ? ' image-only' : ''}">
        <a href="${link}" target="_blank" class="post__link">Подробнее</a>
        <div class="post__image-wrapper">${get_image(el)}</div>
        ${textElement}
      </div>
    `;
    });

    document.querySelector('#news_block').innerHTML = html;
}

function get_image(item) {
    let hasImg = item.attachment && item.attachment.photo && item.attachment.photo.src_big;

    if (hasImg) {
        return `<img class="post__image" src="${hasImg}" alt="news"/>`;
    }

    return '';
}

function replacer(substr, p1, p2) {
    return `
    <a href="https://vk.com/${p1}">${p2}</a>
  `
}
