import { Box, Flex, Stack, Heading, Container } from "@chakra-ui/react";

import SignInButton from "./SignInButton";
import { useAccount } from "wagmi";
import { useEffect, useState } from "react";

export default function Main() {
  const [isSignedIn, setIsSignedIn] = useState<boolean>();

  useEffect(() => {
    const handler = async () => {
      try {
        const res = await fetch("/api/me");
        const json = await res.json();
        setIsSignedIn(!!json.address);
      } catch (_error) {}
    };
    handler();
  }, []);

  return (
    <Box>
      <Box position={"relative"}>
        <Container maxW={"7xl"}>
          <Stack align={"center"} py={{ base: 20, md: 32 }}>
            <Stack flex={1} spacing={{ base: 5, md: 10 }} alignItems={"center"}>
              <Heading
                fontSize={{ base: "xl", sm: "2xl", md: "3xl", lg: "4xl" }}
              >
                {isSignedIn ? "Connected!" : "Connect your wallet and sign in:"}
              </Heading>
              <SignInButton
                isSignedIn={isSignedIn}
                setIsSignedIn={setIsSignedIn}
              />
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
