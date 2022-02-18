function generateRandomColor() {
  return '#000000'.replace(/0/g,function() {
    return (~~(Math.random()*16)).toString(16);
  });
}

function textColorBasedOnBgColor(bgColorHex) {
  const color = (bgColorHex.charAt(0) === '#') ? bgColorHex.substring(1, 7) : bgColorHex;
  const r = parseInt(color.substring(0, 2), 16); // hexToR
  const g = parseInt(color.substring(2, 4), 16); // hexToG
  const b = parseInt(color.substring(4, 6), 16); // hexToB
  return (((r * 0.299) + (g * 0.587) + (b * 0.114)) > 186) ? '#000000' : '#ffffff';
}

export { generateRandomColor, textColorBasedOnBgColor };
