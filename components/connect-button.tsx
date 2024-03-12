import React from "react"
import { Loader2 } from "lucide-react"
import { useConnect } from "wagmi"
import { InjectedConnector } from "wagmi/connectors/injected"

import { Button } from "@/components/ui/button"

const ConnectWalletButton = () => {
  const { connect, isLoading } = useConnect({
    connector: new InjectedConnector(),
  })

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

export default ConnectWalletButton
