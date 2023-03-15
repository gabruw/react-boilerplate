import { ChakraProvider } from "@chakra-ui/react";

import { Router } from "@app/router";

const App = () => (
    <ChakraProvider>
        <Router />
    </ChakraProvider>
);

export default App;
