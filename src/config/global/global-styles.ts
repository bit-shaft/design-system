import { globalCss } from "..";

const globalStyles = globalCss({
  body: {
    margin: 0,
    padding: 0,
    backgroundColor: "$references$background",
    overflowY: "scroll",
  },
});

export { globalStyles };
