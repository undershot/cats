export default function vkApi() {
  window.VK.init({
    apiId: 6092424
  });
  //
  window.VK.Api.call('wall.get', {
    owner_id: -144799026,
    query: '#приз'
  }, info => console.log(info));
}
