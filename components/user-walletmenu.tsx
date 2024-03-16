import { memo, useEffect, useState } from "react"
import { wagmigotchiABI } from "@/assets/data/abi/index"
import { RocketIcon } from "@radix-ui/react-icons"
import { BigNumber, utils } from "ethers"
import {
  useBalance,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import CenterInfo from "./center-info"
import { SelectButton } from "./select-button"
import TokenList from "./token-list"

type AddressType = `0x${string}`;
const UesrMenu = memo(function UesrMenu(props: any) {
  const { address } = props
  const [ethValue, setEthValue] = useState("")
  const [toAddress, setToAddress] = useState("")
  const [newToken, setNewToken] = useState({})
  const [sendTitle, setSendTitle] = useState("Enter an amount")
  const [weiValue, setWeiValue] = useState<BigNumber>(BigNumber.from(0))
  const { data: userInfo } = useBalance({
    address,
  })
  useEffect(() => {
    if (ethValue && toAddress == "") {
      setSendTitle("Enter a address")
    } else if (ethValue && toAddress) {
      setSendTitle("Send a transaction")
    } else if (!ethValue && toAddress == "") {
      setSendTitle("Enter an amount")
    }
  }, [ethValue, toAddress])
  const { config } = usePrepareContractWrite({
    address: "0x0d52b8D6311689396cc797CdECA7218B4a1f6188",
    abi: wagmigotchiABI,
    functionName: "transfer",
    args: [toAddress as AddressType, weiValue],
  })

  const { data: writeData, write } = useContractWrite(config)

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: writeData?.hash,
  })

  const handleChange = (e: { target: { value: any } }) => {
    const value = e.target.value
    setEthValue(value)
    if (value) {
      setWeiValue(BigNumber.from(utils.parseEther(value.toString())))
    }
  }
  const handleToAddressChange = (e) => {
    setToAddress(e.target.value)
  }
  const handleTokenSelect = (item: any) => {
    if (userInfo) {
      userInfo.symbol = item.name
    }
    setNewToken(item)
  }

  return (
    <Tabs defaultValue="send" className="w-[400px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
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
                placeholder="amount"
              />
            </div>
            <div className="space-y-1">
              <Dialog>
                <DialogTrigger asChild>
                  <button className="size-full">
                    <CenterInfo userInfo={userInfo} newToken={newToken} />
                  </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Select a Token</DialogTitle>
                  </DialogHeader>
                  <Input placeholder="Search name or paste address" />
                  <div>Common tokens</div>
                  <SelectButton />
                  <DialogClose asChild>
                    <button>
                      <TokenList onTokenSelect={handleTokenSelect} />
                    </button>
                  </DialogClose>
                  {/* <DialogFooter className="sm:justify-start"></DialogFooter> */}
                </DialogContent>
              </Dialog>
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
            <Button
              className="size-full"
              disabled={!write || isLoading}
              onClick={() => write?.()}
            >
              {sendTitle}
            </Button>
            {/* {isSuccess && (
              <Alert>
                <RocketIcon className="h-4 w-4" />
                <AlertTitle>Heads up!</AlertTitle>
                <AlertDescription>
                  <a href={`https://etherscan.io/tx/${writeData?.hash}`}>
                    Etherscan
                  </a>
                </AlertDescription>
              </Alert>
            )} */}
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
