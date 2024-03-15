import { memo } from "react"
import Icon from "@/assets/svg/one"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const TokenList = memo(function TokenList(props: any) {
  const tokenInfo = [
    {
      name: "ETH",
      img: "https://assets.pancakeswap.finance/web/native/8453.png",
      description: "Ether",
    },
    {
      name: "axlUSDC",
      img: "https://tokens.pancakeswap.finance/images/base/0xEB466342C4d449BC9f53A865D5Cb90586f405215.png",
      description: "Axelar Wrapped USDC",
    },
    {
      name: "tbtc",
      img: "https://tokens.pancakeswap.finance/images/base/0x236aa50979D5f3De3Bd1Eeb40E81137F22ab794b.png",
      description: "Base tBTC v2",
    },
    {
      name: "SABLE",
      img: "https://tokens.pancakeswap.finance/images/base/0xE5393cdBC4Fe7B62F1d76A990Ca7Da17ad718313.png",
      description: "SABLE",
    },
  ]

  const selectToken = (item: any) => {
    props.onTokenSelect(item)
  }
  return (
    <div>
      {tokenInfo.map((item, index) => (
        <div
          key={index}
          onClick={() => selectToken(item)}
          className="flex justify-between items-center cursor-pointer hover:bg-gray-100 active:bg-gray-300  rounded-lg h-16 px-2"
        >
          <div className="flex justify-center">
            <div className="mr-2">
              <Avatar>
                <AvatarImage src={item.img} alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex justify-center flex-col">
              <span className="text-left">{item.name}</span>
              <span className="text-xs text-gray-500">
                {item.description}
              </span>
            </div>
          </div>
          <div>
            <Icon />
          </div>
        </div>
      ))}
    </div>
  )
})

export default TokenList
