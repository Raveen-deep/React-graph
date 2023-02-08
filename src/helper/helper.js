const randomColor = () => {
    let red = Math.floor(Math.random() * 255 + 1);
    let green = Math.floor(Math.random() * 255 + 1);
    let blue = Math.floor(Math.random() * 255 + 1);

    return { red, green, blue };
};
const getNRandomColor = (count) => {
    let colors = [];
    for (let n = 1; n <= count; n++) {
        const { red, green, blue } = randomColor();
        colors.push(`rgb(${red},${blue},${green})`);
    }
    return colors;
};

export default {
    randomColor: randomColor,
    getNRandomColor: getNRandomColor,
};
