import type { AppProps } from "next/app"
import {
  flare,
  flareTestnet,
  harmonyOne,
  iotex,
  iotexTestnet,
  klaytn,
  lineaTestnet,
  localhost,
  mainnet,
  metis,
  metisGoerli,
  moonbaseAlpha,
  moonbeam,
  moonriver,
  nexi,
  okc,
  optimism,
  optimismGoerli,
  polygon,
  polygonMumbai,
  polygonZkEvm,
  polygonZkEvmTestnet,
  pulsechain,
  pulsechainV4,
  scrollTestnet,
  sepolia,
} from "@wagmi/core/chains"
import { ThemeProvider } from "next-themes"
import { WagmiConfig, configureChains, createClient } from "wagmi"
import { MetaMaskConnector } from "wagmi/connectors/metaMask"
import { jsonRpcProvider } from "wagmi/providers/jsonRpc"
import { publicProvider } from "wagmi/providers/public"

import { trpc } from "@/lib/trpc"
import { Toaster } from "@/components/ui/toaster"

import "@/styles/globals.css"

const { chains, provider, webSocketProvider } = configureChains(
  [
    flare,
    flareTestnet,
    harmonyOne,
    iotex,
    iotexTestnet,
    klaytn,
    lineaTestnet,
    localhost,
    mainnet,
    metis,
    metisGoerli,
    moonbaseAlpha,
    moonbeam,
    moonriver,
    nexi,
    okc,
    optimism,
    optimismGoerli,
    polygon,
    polygonMumbai,
    polygonZkEvm,
    polygonZkEvmTestnet,
    pulsechain,
    pulsechainV4,
    scrollTestnet,
    sepolia,
  ],
  [
    jsonRpcProvider({
      rpc: (chain) => ({
        http: "https://eth-sepolia.public.blastapi.io",
      }),
    }),
    publicProvider(),
  ]
)

const wagmiClient = createClient({
  autoConnect: true,
  provider,
  webSocketProvider,
  connectors: [new MetaMaskConnector({ chains })],
})

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <style jsx global>{`
        #__next {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
      `}</style>
      <WagmiConfig client={wagmiClient}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Component {...pageProps} />
          <Toaster />
        </ThemeProvider>
      </WagmiConfig>
    </>
  )
}

export default trpc.withTRPC(App)
