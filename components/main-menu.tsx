import { memo } from "react"
import { useAccount } from "wagmi"

import UesrMenu from "@/components/user-walletmenu"

const MainMenu = memo(function MainMenu() {
  const { isConnected, address } = useAccount()

  if (isConnected) {
    return <UesrMenu address={address} />
  }
})
export default MainMenu
