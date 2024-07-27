import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/scss";
import "swiper/scss/effect-fade";
import "react-toastify/dist/ReactToastify.css";
import "../../public/assets/fontawesome/all.min.css";
import "../../public/assets/fontawesome/sharp-solid.min.css";
import "../../public/assets/fontawesome/sharp-regular.min.css";
import "../../public/assets/scss/style.scss";
import Cursor from "@/components/utils/Cursor";
import {
  inter,
  mulish,
  newsreader,
  oldenburg,
  philosopher,
  sahitya,
} from "./font";
import { ToastContainer } from "react-toastify";
import { Providers } from "@/redux/provider";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${mulish.variable} ${newsreader.variable} ${sahitya.variable} ${philosopher.variable} ${oldenburg.variable}`}
      >
        <Providers>
          <Cursor />
          {children}
          <ToastContainer />
        </Providers>
      </body>
    </html>
  );
}
