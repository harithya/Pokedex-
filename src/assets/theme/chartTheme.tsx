import { color, font } from "@utils";

const chartTheme = {
    "axis": {
        "style": {
            "axis": {
                "fill": "transparent",
                "stroke": color.border,
                "strokeWidth": 1,
                "strokeLinecap": "round",
                "strokeLinejoin": "round"
            },
            "axisLabel": {
                "textAnchor": "middle",
                "fontFamily": font.regular,
                "fontSize": 11,
                "letterSpacing": "normal",
                "padding": 8,
                "fill": "#455A64",
                "stroke": "transparent",
                "strokeWidth": 0
            },
            "grid": {
                "fill": "none",
                "stroke": "#ECEFF1",
                "strokeDasharray": "10, 5",
                "strokeLinecap": "round",
                "strokeLinejoin": "round",
                "pointerEvents": "painted"
            },
            "ticks": {
                "fill": "transparent",
                "size": 0,
                "stroke": "#90A4AE",
                "strokeWidth": 1,
                "strokeLinecap": "round",
                "strokeLinejoin": "round"
            },
            "tickLabels": {
                "fontFamily": font.regular,
                "fontSize": 12,
                "letterSpacing": "normal",
                "padding": 15,
                "fill": "#455A64",
                "stroke": "transparent",
                "strokeWidth": 0
            }
        },
        "width": 350,
        "height": 350,
        "padding": 50
    },
    "bar": {
        "style": {
            "data": {
                "strokeWidth": 1,
            },
            "labels": {
                "fontFamily": font.regular,
                "fontSize": 11,
                "letterSpacing": "normal",
                "padding": 8,
                "fill": "#455A64",
                "stroke": "transparent",
                "strokeWidth": 0
            }
        },
        "width": 350,
        "height": 350,
        "padding": 50
    },
    "chart": {
        "width": 350,
        "height": 350,
        "padding": 35
    },

}

export default chartTheme;