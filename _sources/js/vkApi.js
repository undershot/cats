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
/*
    window.VK.Api.call('wall.search', {
        owner_id: -144799026,
        query: query,
        access_token: '6acba4a46acba4a46acba4a4986a97522c66acb6acba4a4339889facb5280d2e572de4c'
    }, (info) => {

        console.log(info);

        const {response} = info;
        const data = {
            count: response[0],
            items: response.slice(1, response.length)
        };

        if (data.count > 0) {
            html_func(data.items);
        }

        console.log(data)
    });*/
}

export function html_func_news(items) {
    let html = '';

    items.forEach(el => {
        let text = el.text;
        let reg = /\[([^\[\]]+)\|([^\[\]]+)\]/g;
        text = text.replace(reg, replacer);
        html += `
      <div class="post">
        <div class="post__image-wrapper">${get_image(el)}</div>
        <div class="post__text">${text}</div>
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
