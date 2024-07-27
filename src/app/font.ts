import {
  Inter,
  Mulish,
  Newsreader,
  Oldenburg,
  Philosopher,
  Sahitya,
} from "next/font/google";

export const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--inter",
});

export const mulish = Mulish({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--mulish",
});

export const newsreader = Newsreader({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--newsreader",
});

export const sahitya = Sahitya({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--sahitya",
});

export const philosopher = Philosopher({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--philosopher",
});

export const oldenburg = Oldenburg({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--oldenburg",
});
