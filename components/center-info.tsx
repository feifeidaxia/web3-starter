import { memo } from "react"
import Icon from "@/assets/svg/one"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const CenterInfo = memo(function CenterInfo(props: any) {
  const { userInfo } = props

  return (
    <div className="flex justify-between items-center cursor-pointer hover:bg-gray-200 active:bg-gray-300 bg-gray-100 rounded-lg h-16 px-2">
      <div className="flex justify-center">
        <div className="mr-2">
          <Avatar>
            <AvatarImage
              src="https://assets.pancakeswap.finance/web/native/8453.png"
              alt="@shadcn"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex justify-center flex-col">
          <span className="text-left">{userInfo?.symbol}</span>
          <span className="text-xs text-gray-500">
            {Number(userInfo?.formatted).toFixed(3)}
          </span>
        </div>
      </div>
      <div>
        <Icon />
      </div>
    </div>
  )
})

export default CenterInfo
