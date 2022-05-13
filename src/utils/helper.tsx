import color from "./color";
import constant from "./constant";

const helper = {
    hexToRgb: (hex: string, opacity: number) => {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        const res = result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
        return `rgba(${res?.r.toString()}, ${res?.g.toString()}, ${res?.b.toString()},${opacity} )`;
    },

    ucwords: (str: string) => {
        return str.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    },

    getPokemonImage: (number: number) => {
        return constant.imagePath + `/${number}.png`
    },

    getPokemmonColor: (type: string | undefined) => {
        if (type) {
            const colors: any = color
            return colors[type.toLowerCase()]
        } else {
            return color.default
        }
    }

}

export default helper