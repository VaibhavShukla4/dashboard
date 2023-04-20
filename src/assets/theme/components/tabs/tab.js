import typography from "./../../base/typography";
import colors from "./../../base/colors";
import borders from "./../../base/borders";

import pxToRem from "./../../functions/pxToRem";

const { size, fontWeightRegular } = typography;
const { borderRadius } = borders;
const { white } = colors;

export default {
  styleOverrides: {
    root: {
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
      textAlign: "center",
      maxWidth: "unset !important",
      minWidth: "150px",
      minHeight: "35px",
      fontSize: size.xs,
      fontWeight: fontWeightRegular,
      textTransform: "none",
      lineHeight: "inherit",
      padding: `${pxToRem(10)} !important`,
      borderRadius: borderRadius.md,
      color: `${white.main} !important`,
      opacity: "1 !important",

      "& .material-icons, .material-icons-round": {
        marginBottom: "0 !important",
        marginRight: pxToRem(4),
      },

      "& svg": {
        marginBottom: "0 !important",
        color: `#fff !important`,
        marginRight: pxToRem(6),
      },
    },

    labelIcon: {
      paddingTop: pxToRem(4),
    },
  },
};
