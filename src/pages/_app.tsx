import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { WagmiConfig, configureChains, createConfig, sepolia } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [sepolia],
  [publicProvider()]
);

const config = createConfig({
  autoConnect: false,
  connectors: [new MetaMaskConnector({ chains })],
  publicClient,
  webSocketPublicClient,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={config}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </WagmiConfig>
  );
}
