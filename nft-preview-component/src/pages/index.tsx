import { Image, Grid, Spacer, Text, Card, Row, Divider } from '@nextui-org/react'
import { SiEthereum } from 'react-icons/si'
import { AiFillClockCircle } from 'react-icons/ai'

export default function Home() {
  return (
    <>
      <div style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Card css={{ width: "350px", bg: "#15273F" }}>
          <Spacer y={1.2} />
          <Image width={300} src="https://cdn.discordapp.com/attachments/1074339253246496779/1079159125528817715/image-equilibrium.jpg" css={{ br: "8px" }} />
          <Spacer y={0.65} />

          <Text css={{ fontSize: "23px", "marginLeft": "26px" }}>Equailibrium #3429</Text>
          <Spacer y={0.2} />
          <Text css={{ fontSize: "18px", "marginLeft": "26px", color: "#7186A2" }}>Our Equailibrium collection promotes</Text>
          <Text css={{ fontSize: "18px", "marginLeft": "26px", color: "#7186A2" }}>balance and calm.</Text>
          <Spacer y={1} />
          <Row>
            <Text css={{ fontSize: "18px", "marginLeft": "26px", color: "#26FFFF" }}><SiEthereum size={16}/>  0.041 ETH</Text>
            <Text css={{ fontSize: "18px", "marginLeft": "30%", color: "#7186A2"}}><AiFillClockCircle size={16}/>  3 days left</Text>
          </Row>
          <Spacer y={1} />
          <Divider  css={{ width: "85%", "marginLeft": "auto", "marginRight": "auto" }} />
          <Spacer y={1} />
          <Image  width={40} src={"https://cdn.discordapp.com/attachments/1074339253246496779/1079167047612764280/image-avatar.png"} css={{  }} />
          <Spacer y={1.5} />
        </Card>
      </div>
    </>
  )
}
