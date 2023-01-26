import { AppContext, ContextValue } from "@/context/AppContext";
import type { AppProps } from "next/app";
import "@/styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppContext.Provider value={ContextValue()}>
      <Component {...pageProps} />;
    </AppContext.Provider>
  );
}
