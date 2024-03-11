import { memo } from "react"
import { Loader2 } from "lucide-react"
import { useAccount, useConnect, useDisconnect } from "wagmi"
import { InjectedConnector } from "wagmi/connectors/injected"

import { Button } from "@/components/ui/button"

export const MainMenu = memo(() => {
  const { isConnected } = useAccount()
  const { connect, isLoading, error } = useConnect({
    connector: new InjectedConnector(),
  })
  const { disconnect } = useDisconnect()

  if (isConnected) {
    return (
      <div>
        <Button onClick={() => disconnect()}>Disconnect</Button>
      </div>
    )
  } else {
    return (
      <div>
        {isLoading ? (
          <Button disabled>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Please wait
          </Button>
        ) : (
          <Button onClick={() => connect()}>Connect Wallet</Button>
        )}
      </div>
    )
  }
})
