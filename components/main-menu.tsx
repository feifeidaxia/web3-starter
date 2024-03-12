import { memo } from "react"
import { useAccount } from "wagmi"

import ConnectWalletButton from "@/components/connect-button"
import UserDropdownMenu from "@/components/logout-button"
import NetworkSwitcher from "@/components/network-switcher"
import UesrMenu from "@/components/user-walletmenu"

const MainMenu = memo(function MainMenu() {
  const { isConnected, address } = useAccount()

  if (isConnected) {
    return (
      <>
        <NetworkSwitcher />
        <UserDropdownMenu address={address} />
        <UesrMenu />
      </>
    )
  } else {
    return <ConnectWalletButton />
  }
})
export default MainMenu
