import { Box } from "./Box";
import { Content } from "./Content"

export const Layout = ({ children }) => (
  <Box>
    {children}
    <Content />
  </Box>
);
