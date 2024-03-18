import { memo } from "react"
import useLoadingStore from "@/store/loadingStore"
import { ReloadIcon } from "@radix-ui/react-icons"
import Spline from "@splinetool/react-spline"
import { useAccount } from "wagmi"

import UesrMenu from "@/components/user-walletmenu"

const MainMenu = memo(function MainMenu() {
  const { isConnected, address } = useAccount()
  const { pageLoading } = useLoadingStore()

  return (
    <div className="h-lvh">
      {isConnected && <UesrMenu address={address} />}
      {/* <Spline scene="https://prod.spline.design/YMLwHBrZcb2CsruE/scene.splinecode" /> */}
      {pageLoading && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-200 bg-opacity-50">
          <ReloadIcon className="h-4 w-4 animate-spin" />
        </div>
      )}
    </div>
  )
})
export default MainMenu
