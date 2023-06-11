import { Box } from "./Box";
import { Content } from "./Content"

export default function Layout  ({ children }){return (
  <Box>
    {children}
    <Content />
  </Box>
)};
