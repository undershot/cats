function bornCalculate(bornDate) {
  const year = [ 'год', 'года', 'лет' ];
  const month = [ 'месяц', 'месяца', 'месяцев' ];
  const _bornDate = new Date(bornDate * 1000);
  const nowDate = new Date();

  let result = '';
  let bornYear = nowDate.getFullYear() - _bornDate.getFullYear();
  let bornMonth = nowDate.getMonth() - _bornDate.getMonth() + 1;

  if (bornYear > 0) {
    switch (bornYear) {
      case 1:
        result = `${bornYear} ${year[0]}`
        break;
      case 2:
      case 3:
      case 4:
        result = `${bornYear} ${year[1]}`
        break;
      default:
        result = `${bornYear} ${year[2]}`
        break;
    }
  }

  if (bornMonth > 0) {
    switch (bornMonth) {
      case 1:
        result += ` ${bornMonth} ${month[0]}`
        break;
      case 2:
      case 3:
      case 4:
        result += ` ${bornMonth} ${month[1]}`
        break;
      default:
        result += ` ${bornMonth} ${month[2]}`
        break;
      }
  }

  return result;
}

export default function initScript() {
  [...document.querySelectorAll('.data_age')].forEach( el => {
    const _bornDate = el.dataset.age;

    el.textContent = bornCalculate(_bornDate);
  });
}
