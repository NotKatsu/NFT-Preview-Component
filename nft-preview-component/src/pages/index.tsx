import { Image, Grid, Spacer, Text, Card, Row, Divider, User } from '@nextui-org/react'
import { SiEthereum } from 'react-icons/si'
import { AiFillClockCircle } from 'react-icons/ai'

const name = () => {
  return <Text>Hello WORLD</Text>
}

export default function Home() {
  return (
    <>
      <div style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Card 
        css={{ width: "350px", bg: "#15273F" }}>

          <Spacer y={1.2} />

          <Image 
          width={300} 
          src="https://cdn.discordapp.com/attachments/1074339253246496779/1079159125528817715/image-equilibrium.jpg" 
          alt="Image of NFT"
          css={{ br: "8px" }} />

          <Spacer y={0.65} />

          <Text 
          css={{ fontSize: "23px", "marginLeft": "26px", fontWeight: "700" }}
          >Equailibrium #3429</Text>

          <Spacer y={0.2} />
          <Text 
          css={{ fontSize: "18px", "marginLeft": "26px", color: "#7186A2" }}
          >Our Equailibrium collection promotes</Text>

          <Text 
          css={{ fontSize: "18px", "marginLeft": "26px", color: "#7186A2" }}
          >balance and calm.</Text>
          <Spacer y={1} />
          <Row>
            <Text 
            css={{ fontSize: "18px", "marginLeft": "26px", color: "#26FFFF" }}
            ><SiEthereum size={16} style={{ alignItems: "center" }}/>  0.041 ETH</Text>
            <Text 
            css={{ fontSize: "18px", "marginLeft": "30%", color: "#7186A2"}}
            ><AiFillClockCircle size={16} style={{ alignItems: "center" }}/>  3 days left</Text>
          </Row>

          <Spacer y={1} />

          <Divider 
          css={{ width: "85%", "marginLeft": "auto", "marginRight": "auto" }} />

          <Spacer y={1} />

          <Row>
            <User 
            src="https://cdn.discordapp.com/attachments/1074339253246496779/1079167047612764280/image-avatar.png" 
            name="Creation of"
            bordered 
            color="primary" 
            size="md" 
            altText="User Profile Picture"
            css={{ marginLeft: "20px", "marginRight": "0", "& .nextui-user-name": {
              color: "#7186A2",
               
            } }} />

            <Text 
            css={{ fontSize: "14px", color: "#FFFFFF", marginTop: "0.40rem"}}
            >Jules Wyvern</Text>

          </Row>
          <Spacer y={1.5} />
        </Card>
      </div>
    </>
  )
}
