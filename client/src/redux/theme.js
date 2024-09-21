  // import { createSlice } from "@reduxjs/toolkit";

  // const initialState = {
  //   theme: JSON.parse(window?.localStorage.getItem("theme")) ?? "dark",
  // };

  // const themeSlice = createSlice({
  //   name: "theme",
  //   initialState,
  //   reducers: {
  //     setTheme(state, action) {
  //       state.theme = action.payload;
  //       localStorage.setItem("theme", JSON.stringify(action.payload));
  //     },
  //   },
  // });

  // export default themeSlice.reducer;

  // export function SetTheme(value) {
  //   return (dispatch) => {
  //     dispatch(themeSlice.actions.setTheme(value));
  //   };
  // }


  import { createSlice } from "@reduxjs/toolkit";

  const getStoredTheme = () => {
    if (typeof window !== "undefined") {
      const storedTheme = window.localStorage.getItem("theme");
      if (storedTheme) {
        try {
          return JSON.parse(storedTheme);
        } catch (e) {
          console.error("Failed to parse theme from localStorage", e);
        }
      }
    }
    return "dark"; // Default value if no theme is stored
  };

  const initialState = {
    theme: getStoredTheme(),
  };

  const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
      setTheme(state, action) {
        state.theme = action.payload;
        if (typeof window !== "undefined") {
          localStorage.setItem("theme", JSON.stringify(action.payload));
        }
      },
    },
  });

  export default themeSlice.reducer;

  export function SetTheme(value) {
    return (dispatch) => {
      dispatch(themeSlice.actions.setTheme(value));
    };
  }
