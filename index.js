/**
 * 
 * @authors cyphers <https://github.com/waluisachi> ben00262 <https://github.com/BEN00262> 
 * 
 */

import chroma from "chroma-js";

function hexColorDifference(hex1, hex2) {
    let lab1 = chroma(hex1).lab();
    let lab2 = chroma(hex2).lab();

    let diff = chroma.deltaE(lab1, lab2, {mode: 'cie2000'});
    return diff;
}

function check_if_colors_similar(hex1, hex2) {
    let diff = hexColorDifference(hex1, hex2);
    return diff <= 20;
}

const generate_random_color = () => {
    let x = Math.round(0xffffff * Math.random()).toString(16);

    let y = (6 - x.length);
    let z = "000000";
    let z1 = z.substring(0,y);

    return `#${z1}${x}`
}

export default function generate_random_colors(how_many = 1) {
    if (how_many === 1) {
        return generate_random_color();
    }

    return (new Array(how_many).fill("#000000")).reduce((acc, _) => {
        let generated_color = generate_random_color();

        while (acc.map(x => check_if_colors_similar(x, generated_color)).some(u => u)) {
           generated_color = generate_random_color()
        }

        return [...acc, generated_color]
    }, [])
}