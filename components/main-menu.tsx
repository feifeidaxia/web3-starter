import { memo } from "react"
import Spline from "@splinetool/react-spline"
import { useAccount } from "wagmi"

import UesrMenu from "@/components/user-walletmenu"

const MainMenu = memo(function MainMenu() {
  const { isConnected, address } = useAccount()

  return (
    <div className="h-lvh">
      {isConnected && <UesrMenu address={address} />}
      <Spline scene="https://prod.spline.design/YMLwHBrZcb2CsruE/scene.splinecode" />
    </div>
  )
})
export default MainMenu
