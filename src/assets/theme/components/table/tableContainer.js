import colors from "./../../../theme/base/colors";
import boxShadows from "./../../../theme/base/boxShadows";
import borders from "./../../../theme/base/borders";

const { transparent } = colors;
const { xxl } = boxShadows;
const { borderRadius } = borders;

export default {
  styleOverrides: {
    root: {
      backgroundColor: transparent.main,
      boxShadow: xxl,
      borderRadius: borderRadius.xl,
      "& thead": {
        "& tr": {
          "& th": {
            "&:first-of-type": {
              paddingLeft: "0px !important",
            },
          },
        },
      },
      "& .MuiTableBody-root": {
        "& tr": {
          "& td": {
            "&:first-of-type": {
              paddingLeft: "0px !important",
              "& .MuiBox-root": {
                paddingLeft: "0px !important",
              },
            },
          },
        },
      },
    },
  },
};
