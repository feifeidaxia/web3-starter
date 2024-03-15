import { useState } from "react"
import { useNetwork, useSwitchNetwork } from "wagmi"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"

export const NetworkSwitcher = () => {
  const { chain: currentChain } = useNetwork()
  const { chains, error, isLoading, pendingChainId, switchNetwork } =
    useSwitchNetwork()
  const { toast } = useToast()

  const handleRetry = () => {
    toast({
      variant: "destructive",
      title: "Uh oh! Something went wrong.",
      description: error?.message,
      action: <ToastAction altText="Try again">Try again</ToastAction>,
    })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>
          {currentChain?.name ?? currentChain?.id}
          {currentChain?.unsupported && " (unsupported)"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Select a Network</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="w-30 overflow-y-auto">
          {chains.map((chain) => (
            <DropdownMenuRadioItem
              className="pl-2"
              key={chain.id}
              value={chain.name}
              disabled={!switchNetwork}
              onClick={() => switchNetwork?.(chain.id)}
            >
              {chain.name}
              {isLoading && chain.id === pendingChainId && " (switching)"}
            </DropdownMenuRadioItem>
          ))}
        </div>
        {error && (
          <ToastAction altText="Try again" onClick={handleRetry}>
            Try again
          </ToastAction>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default NetworkSwitcher
