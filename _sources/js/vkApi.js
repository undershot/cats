export function vkApi(query, html_func) {
  window.VK.init({
    apiId: 6092424
  });

  window.VK.Api.call('wall.search', {
    owner_id: -144799026,
    query: query
  }, (info) => {
    const { response } = info;
    const data = {
      count: response[0],
      items: response.slice(1, response.length)
    }

    if (data.count > 0) {
      html_func(data.items);
    }

    console.log(data)
  });
}

export function html_func_news(items) {
  let html = '';

  items.forEach(el => {
    let text = el.text;
    let reg = /\[(club144799026)\|(Котики-Енотики антикафе с животными)\]/g;
    text = text.replace(reg, replacer);
    html += `
      <div class="post">
        ${text}
        ${get_image(el)}
      </div>
    `;
  });

  document.querySelector('#news_block').innerHTML = html;
}

function get_image(item) {
  let hasImg = item.attachment && item.attachment.photo && item.attachment.photo.src_big;

  if (hasImg) {
    return `<img src="${hasImg}" alt="news"/>`;
  }

  return '';
}

function replacer(substr, p1, p2) {
  return `
    <a href="https://vk.com/${p1}">${p2}</a>
  `
}
