import { memo, useEffect, useState } from "react"
import { wagmigotchiABI } from "@/assets/data/abi/index"
import Icon from "@/assets/svg/one"
import { BigNumber, utils } from "ethers"
import {
  useBalance,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi"
// import { useDebounceValue } from 'usehooks-ts'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Address } from 'viem';

const UesrMenu = memo(function MainMenu(props: any) {
  const { address } = props
  const [ethValue, setEthValue] = useState("")
  const [toAddress, setToAddress] = useState("")
  const [weiValue, setWeiValue] = useState<BigNumber>(BigNumber.from(0))
  // const debouncedTokenId = useDebounceValue(ethValue, 500)

  const { data: userInfo } = useBalance({
    address,
  })

  const { config } = usePrepareContractWrite({
    address: "0x0d52b8D6311689396cc797CdECA7218B4a1f6188",
    abi: wagmigotchiABI,
    functionName: "transfer",
    args: [toAddress as Address, weiValue],
  })

  const { data: writeData, write } = useContractWrite(config)

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: writeData?.hash,
  })

  const handleChange = (e: { target: { value: any } }) => {
    const value = e.target.value
    setEthValue(value)
    setWeiValue(BigNumber.from(utils.parseEther(value.toString())));
  }
  const handleToAddressChange = (e) => {
    setToAddress(e.target.value)
  }

  return (
    <Tabs defaultValue="send" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="send">send</TabsTrigger>
        <TabsTrigger value="buy">buy</TabsTrigger>
      </TabsList>
      <TabsContent value="send">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm text-slate-500 hover:text-blue-600">
              你正在发送
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-1">
              <Input
                type="number"
                value={ethValue}
                onChange={handleChange}
                id="ethValue"
                placeholder="account"
              />
            </div>
            <div className="space-y-1">
              <div className="flex justify-between items-center cursor-pointer hover:bg-gray-200 active:bg-gray-300 bg-gray-100 rounded-lg h-16 px-2">
                <div className="flex justify-center">
                  <div className="mr-2">
                    <Avatar>
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="flex justify-center flex-col">
                    <span className="text-base">{userInfo?.symbol}</span>
                    <span className="text-xs text-gray-500">
                      Balance：{userInfo?.formatted}
                    </span>
                  </div>
                </div>
                <div>
                  <Icon />
                </div>
              </div>
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">接收者</Label>
              <Input
                value={toAddress}
                onChange={handleToAddressChange}
                id="username"
                placeholder="address"
              />
            </div>
          </CardContent>
          <CardFooter className="relative">
            <Button disabled={!write || isLoading} onClick={() => write?.()}>
              transfer
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="buy">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@peduarte" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
})

export default UesrMenu
