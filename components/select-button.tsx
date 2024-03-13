export function SelectButton() {
  return (
    <div className="flex -mt-3">
      <span className="w-20 select-none mr-3 rounded-xl cursor-pointer border border-gray-200 px-2 py-1 flex items-center hover:bg-slate-300">
        <span className="w-6 mr-1">
          <img
            src="https://assets.pancakeswap.finance/web/native/11155111.png"
            alt=""
          />
        </span>
        <span>ETH</span>
      </span>

      <span className="w-23 select-none mr-2 rounded-xl cursor-pointer border border-gray-200 px-2 py-1 flex items-center  hover:bg-slate-300">
        <span className="w-6 h-6 mr-1">
          <img
            src="https://tokens.pancakeswap.finance/images/symbol/weth.png"
            alt=""
          />
        </span>
        <span>WETH</span>
      </span>

      <span className="w-23 select-none mr-2 rounded-xl cursor-pointer border border-gray-200 px-2 py-1 flex items-center  hover:bg-slate-300">
        <span className="w-6 h-6 mr-1">
          <img
            src="https://tokens.pancakeswap.finance/images/symbol/usdc.png"
            alt=""
          />
        </span>
        <span>USDC</span>
      </span>

      <span className="w-23 select-none mr-2 rounded-xl cursor-pointer border border-gray-200 px-2 py-1 flex items-center  hover:bg-slate-300">
        <span className="w-6 h-6 mr-1">
          <img
            src="https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png"
            alt=""
          />
        </span>
        <span>DAI</span>
      </span>
    </div>
  )
}
