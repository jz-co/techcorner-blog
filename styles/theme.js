import { extendTheme } from "@chakra-ui/react"

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
  colors: {
    brandPrimary: {
      100: "#F5FBFF",
      800: "rgba(4, 46, 78, 1)",
      900: "rgba(3, 22, 40, 1)"
    },
    brandSecondary: {
      400: "rgba(152, 168, 178, 1)",
      600: "rgba(119, 137, 149, 1)"
    }
  }
}

const theme = extendTheme({ config })
export default theme