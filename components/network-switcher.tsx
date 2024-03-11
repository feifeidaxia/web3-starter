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

export const NetworkSwitcher = () => {
  const { chain: currentChain } = useNetwork()
  const { chains, error, isLoading, pendingChainId, switchNetwork } =
    useSwitchNetwork()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>
          {currentChain?.name ?? currentChain?.id}
          {currentChain?.unsupported && " (unsupported)"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Select a Network</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {chains.map((chain) => (
          <DropdownMenuRadioItem
            key={chain.id}
            value={chain.name}
            disabled={!switchNetwork}
            onClick={() => switchNetwork?.(chain.id)}
          >
            {chain.name}
            {isLoading && chain.id === pendingChainId && " (switching)"}
          </DropdownMenuRadioItem>
        ))}
        {error && <div className="text-red-500">Error: {error.message}</div>}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default NetworkSwitcher
