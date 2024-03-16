import { Loader2 } from "lucide-react"
import { useAccount, useConnect } from "wagmi"

// import { InjectedConnector } from "wagmi/connectors/injected"

import { Button } from "@/components/ui/button"

import UserDropdownMenu from "./logout-button"
import NetworkSwitcher from "./network-switcher"

export default function NavLogin() {
  const { address, isConnected } = useAccount()

  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect()

  if (isConnected) {
    return (
      <>
        <NetworkSwitcher />
        <UserDropdownMenu address={address} />
      </>
    )
  }

  const metamask = connectors.find((connector) => connector.id === "metaMask")
  if (!metamask) {
    return <></>
  }

  return (
    <>
      {isLoading ? (
        <Button disabled>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Please wait
        </Button>
      ) : (
        // <Button onClick={() => connect({ connector: metamask })}>
        //   Connect Metamask
        // </Button>
        <Button
          variant="outline"
          onClick={() => connect({ connector: metamask })}
        >
          Connect Metamask
        </Button>
      )}
    </>
    // </Button>
  )
}
