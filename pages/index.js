import { motion } from "framer-motion";
import Head from "next/head";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Loading from "../components/Loading";
import PassionateToBringbeautifulTiles from "../components/PassionateToBringbeautifulTiles";
import Aos from "aos";
import "aos/dist/aos.css";
import FirstPart from "../components/FirstPart";
import Footer from "../components/Footer";
import Images from "../components/Images";
import ExampleSlides from "../components/ExampleSlides";
import Global from "../components/Global";
import Tiles from "../components/Tiles";

export default function Home() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div>
      <Head>
        <title>
          Glazed Porcelain Tile - Gres Porcellanato Tiles - Wall Tiles - Full
          Body Tiles
        </title>
        <link
          rel="icon"
          href="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMTUwcHgiIGhlaWdodD0iMTM1LjU0MXB4IiB2aWV3Qm94PSIwIDAgMTUwIDEzNS41NDEiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDE1MCAxMzUuNTQxIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIGQ9Ik0xMTAuNTgxLDc0Ljg2MmgtNS4xNTl2MzQuNDE0aDUuMzAybC0wLjA5Mi0yNi4yMjlsMTcuOTk2LDI2LjIyOWg1LjAyNVY3NC44NjJoLTUuMzA0bDAuMDk0LDI2LjE4NEwxMTAuNTgxLDc0Ljg2MnoNCgkJIE02OS44NzEsOTIuMDI0YzAtNi45Myw1LjExNi0xMi45NzgsMTIuNjAzLTEyLjk3OGM3LjUzMywwLDEyLjUxLDYuMzIzLDEyLjUxLDEzLjA2NWMwLDYuNjk5LTQuOTc3LDEyLjk4LTEyLjQ2MiwxMi45OA0KCQljLTcuMzQ3LDAtMTIuNjQ3LTUuODYzLTEyLjY0Ny0xMy4wMjV2LTAuMDQzSDY5Ljg3MXogTTY0LjQzMSw5Mi4zMDZjMCw5LjQ4Myw3LjU4LDE3LjYyMywxNy45NSwxNy42MjMNCgkJYzEwLjMyNCwwLDE4LjA5MS03Ljk1MywxOC4wOTEtMTcuODYxYzAtOS45MDUtNy43NjUtMTcuODU3LTE4LjA0Mi0xNy44NTdjLTkuNjc0LDAtMTcuOTk3LDcuMjA3LTE3Ljk5NywxOC4wNDN2MC4wNTNINjQuNDMxDQoJCUw2NC40MzEsOTIuMzA2eiBNNTUuNDM0LDk4LjgxM2MtMC43NDUsMS4yNTYtMy45NTUsNi4yODEtMTAuNjA0LDYuMjgxYy03LjI1NSwwLTEyLjQ2NC01LjkwOC0xMi40NjQtMTMuMDY4DQoJCWMwLTYuOTgsNS4xMTYtMTIuOTc5LDEyLjQxOC0xMi45NzljNi4wNDYsMC4wNDgsOS41MzQsNC4yMzMsMTAuNjUsNi40NjZoNS44MTNjLTEuNjcyLTQuNzQyLTcuMTYtMTEuMjUyLTE2LjQxNS0xMS4zDQoJCWMtMTAuNjUxLDAtMTcuOTUyLDguMzcxLTE3Ljk1MiwxNy44MTNjMCw5Ljc2Niw3LjYyOCwxNy45MDQsMTcuOTk4LDE3LjkwNGM3LjgxNCwwLDE0LjE4NS00LjgzNiwxNi4zMjUtMTEuMTEzaC01Ljc3MQ0KCQlMNTUuNDM0LDk4LjgxM0w1NS40MzQsOTguODEzeiBNMTYuMzQ3LDEwOS4yNzZoNS40ODZWNzQuODYyaC01LjQ4NlYxMDkuMjc2eiIvPg0KCTxwYXRoIGQ9Ik0xMTYuMDE0LDEyNy45NzhoNS4wNTV2LTAuOWgtNC4wNDV2LTMuMjU2aDQuMDJ2LTAuODk4aC00LjAydi0zLjE3aDQuMDQ1di0wLjloLTUuMDU1VjEyNy45Nzh6IE0xMTAuMDQ3LDEyNy45NzhoNC40OTkNCgkJdi0wLjloLTMuNDc1di04LjIyN2gtMS4wMjRWMTI3Ljk3OHogTTEwNi42ODEsMTI3Ljk3OGgxLjAxMnYtOS4xMjNoLTEuMDEyVjEyNy45Nzh6IE0xMDEuODk5LDEyNy45NzhoMS4wMjN2LTguMjI3aDIuMjU3di0wLjkNCgkJaC01LjUyM3YwLjloMi4yNDNWMTI3Ljk3OHogTTkwLjc0OCwxMjcuOTc4aDEuMDEydi00LjEwNWgzLjZ2LTAuOTE0aC0zLjZ2LTMuMjA1aDMuNjIzdi0wLjloLTQuNjM1VjEyNy45Nzh6IE04MC4zNDQsMTIzLjM5OQ0KCQljMC0yLjEwNSwxLjU5LTMuODExLDMuNzM1LTMuODExYzIuMTcsMCwzLjc0OCwxLjc0MiwzLjc0OCwzLjgyMmMwLDIuMDg0LTEuNTgsMy44MjItMy43MzUsMy44MjJjLTIuMTMyLDAtMy43NDgtMS42OC0zLjc0OC0zLjgyMg0KCQlWMTIzLjM5OXogTTc5LjMxOCwxMjMuNDUyYzAsMi42MDIsMi4wNjEsNC42ODYsNC43NTksNC42ODZjMi42ODgsMCw0Ljc2LTIuMDQ5LDQuNzYtNC43MjNjMC0yLjY3OC0yLjA4Ni00LjcyNS00Ljc2LTQuNzI1DQoJCWMtMi41NzUsMC00Ljc1OSwxLjkzOC00Ljc1OSw0Ljc0OFYxMjMuNDUyeiBNNjcuMDg1LDExOS43NTFoMS44MTFjMS4yNDQsMCwyLjA5NywwLjQwOCwyLjY3NywxLjAyNQ0KCQljMC42MDQsMC42NjIsMC44ODcsMS42MDQsMC44ODcsMi42NmMwLDIuMTkzLTEuMjIsMy42NDEtMy41NjIsMy42NDFoLTEuODExdi03LjMyNkg2Ny4wODV6IE02Ni4wNzIsMTI3Ljk3OGgyLjc3Mw0KCQljMy4wNjksMCw0LjYzNi0xLjgyOCw0LjYzNi00LjU3OGMwLTEuMjkzLTAuMzU2LTIuMzY1LTEuMDk3LTMuMThjLTAuOTEzLTEuMDg0LTIuMjkyLTEuMzY5LTMuNTg3LTEuMzY5aC0yLjcyN0w2Ni4wNzIsMTI3Ljk3OA0KCQlMNjYuMDcyLDEyNy45Nzh6IE02MC4xMDYsMTI3Ljk3OGg0LjUwMXYtMC45aC0zLjQ3N3YtOC4yMjdoLTEuMDI0VjEyNy45Nzh6IE01Mi4yNjgsMTI3Ljk3OGgxLjAyM3YtOC4yMjdoMS40Mw0KCQljMC44MjcsMCwxLjM5NiwwLjAzOSwxLjg1LDAuMzM2YzAuNTY1LDAuMzY5LDAuODk4LDEuMDgsMC44OTgsMS43NjRjMCwwLjY0OC0wLjIwOSwxLjIwMy0wLjY4OCwxLjY3NA0KCQljLTAuNDkxLDAuNDU3LTEuMzgyLDAuNDY5LTIuMDIxLDAuNDY5aC0wLjI5N2wyLjU3NSwzLjk4NGgxLjEwOWwtMi4yNjktMy40MTZjMC44MzktMC4wODYsMS40ODktMC4yNTgsMi4wMzYtMC45OTgNCgkJYzAuMzgxLTAuNTE4LDAuNTU0LTEuMTcsMC41NDItMS43ODVjMC0xLjAzNy0wLjUwNi0yLjAxMi0xLjI0Ny0yLjQ1M2MtMC40NjgtMC4yOTctMS4xMzQtMC40NzEtMi41NjUtMC40NzFoLTIuMzc3VjEyNy45Nzh6DQoJCSBNNDEuOTQ5LDEyMy4zOTljMC0yLjEwNSwxLjU5Mi0zLjgxMSwzLjczNS0zLjgxMWMyLjE3LDAsMy43NDgsMS43NDIsMy43NDgsMy44MjJjMCwyLjA4NC0xLjU4LDMuODIyLTMuNzM1LDMuODIyDQoJCWMtMi4xMzUsMC0zLjc0OC0xLjY4LTMuNzQ4LTMuODIyVjEyMy4zOTl6IE00MC45MjYsMTIzLjQ1MmMwLDIuNjAyLDIuMDU4LDQuNjg2LDQuNzYsNC42ODZjMi42ODgsMCw0Ljc1OC0yLjA0OSw0Ljc1OC00LjcyMw0KCQljMC0yLjY3OC0yLjA4NC00LjcyNS00Ljc1OC00LjcyNWMtMi41NzYsMC00Ljc2LDEuOTM4LTQuNzYsNC43NDhWMTIzLjQ1MnogTTMxLjQ1OSwxMjcuOTc4aDEuMDIybDEuOTQ3LTcuNDA4bDEuOTQ3LDcuNDA4aDENCgkJbDIuNTUzLTkuMTIzaC0xLjAzN2wtMi4wNDYsNy43MjlsLTIuMDMzLTcuNzI5aC0wLjc2NWwtMS45OTgsNy43MjlsLTIuMDcxLTcuNzI5aC0xLjA0OEwzMS40NTksMTI3Ljk3OHoiLz4NCgk8cGF0aCBkPSJNNzcuMzM2LDMwLjI2M2MwLDEwLjI5OSwwLDIwLjYwNCwwLDMwLjkwMmMtMC4zNTQsMC4wMTItMC43MTIsMC4wMi0xLjA3MSwwLjAyaC0yLjUyNmMtMC4zNTksMC0wLjcxOC0wLjAwNi0xLjA3Mi0wLjAyDQoJCWMwLTEwLjI5OSwwLTIwLjYwMywwLTMwLjkwMmwyLjMzNy0xLjM1TDc3LjMzNiwzMC4yNjN6IE04Ni42ODksNTkuMjU1Yy0xLjUwNCwwLjU3OC0zLjA2NCwxLjAzNC00LjY3NiwxLjM1OQ0KCQljMC05LjIxNSwwLTE4LjQzOCwwLTI3LjY1Mmw0LjY3NiwyLjY5OUM4Ni42ODksNDMuNTI2LDg2LjY4OSw1MS4zOTQsODYuNjg5LDU5LjI1NXogTTYzLjMxMSwzNS42NjFsNC42NzMtMi42OTkNCgkJYzAsOS4yMTUsMCwxOC40MzcsMCwyNy42NTJjLTEuNjA4LTAuMzI1LTMuMTcxLTAuNzgxLTQuNjczLTEuMzU5QzYzLjMxMSw1MS4zOTQsNjMuMzExLDQzLjUyNiw2My4zMTEsMzUuNjYxeiBNNzUsMjMuNTM2DQoJCWwxMS42OTEsNi43NDhsMi41OS0zLjg4M0w3NSwxOC4xNTlsLTE0LjI3OSw4LjI0MmwyLjU5LDMuODgzTDc1LDIzLjUzNnogTTc1LDcuNDAzTDU1LjU0NCwxOC42MzVsMi41ODgsMy44ODJMNzUsMTIuNzgzDQoJCWwxNi44NjgsOS43MzdsMi41ODgtMy44ODJMNzUsNy40MDN6Ii8+DQo8L2c+DQo8L3N2Zz4NCg=="
        />
      </Head>
      {loading ? (
        <Loading />
      ) : (
        <div className={"overflow-x-hidden"}>
          <motion.div
            initial="initial"
            animate="animate"
            variants={{
              initial: {
                opacity: 0,
              },
              animate: {
                opacity: 2,
              },
            }}
          >
            <div>
              <Header />
              <FirstPart />
              <PassionateToBringbeautifulTiles />
              <ExampleSlides />
              <div className={"my-6"}>
                <h1
                  data-aos="fade-up"
                  className="text-center font-bold text-3xl mb-1 "
                >
                  Discover our Creations
                </h1>
                <h1 data-aos="fade-up" className="text-center mb-5">
                  Elegance, Luxury, Glamour and Sensuality
                </h1>
              </div>
              <Images />
              <Tiles />
              <Global />
            </div>
            <Footer />
          </motion.div>
        </div>
      )}
    </div>
  );
}
