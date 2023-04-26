import FormikForm from "./pages/FormikForm";

import { ThemeContextProvider, getMovistarSkin } from "@telefonica/mistica";

const misticaTheme = {
  skin: getMovistarSkin(),
  i18n: { locale: "es-ES", phoneNumberFormattingRegionCode: "ES" },
};

function App() {
  return (
    <ThemeContextProvider theme={misticaTheme}>
      <FormikForm />
    </ThemeContextProvider>
  );
}

export default App;
