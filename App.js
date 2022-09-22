import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Spacer,
  SimpleGrid,
  Container,
  useColorMode,
  Icon,
  Spinner,
  Divider,
  BeatLoader,
  Grid,
  GridItem,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Link,
  Image,
  VStack,
  Code,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
//import { Logo } from './Logo';
import img from './me.png';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { FaGithub } from 'react-icons/fa';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <>
        <main>
          <Box maxWidth="900px" m="auto" pr="20px" pl="20px">
            <Box
              bg="rgb(86,130,3,.7)
"
              p="25px"
              mb="20px"
            ></Box>
            <Grid
              templateColumns={[
                'repeat(1, 1fr)',
                'repeat(1, 1fr)',
                'repeat(3, 1fr)',
                'repeat(3, 1fr)',
              ]}
              gap={20}
            >
              <GridItem colSpan={2} w="100%">
                <Heading pt="0px" align="top">
                  Teal Matrix{' '}
                  <Link href="https://github.com/tealmatrix" isExternal>
                    <Icon as={FaGithub} name="github" />
                  </Link>
                </Heading>
                <Divider mb="30px" />
                <Flex alignItems="center" justify="space-between">
                  <Text mb="10px" fontWeight="bold" fontSize="2xl">
                    Summary Statement
                  </Text>
                  <Box w="50%" h="20px" bg="rgb(86,130,3,.3)"></Box>
                </Flex>

                <Text mb="10px">
                  Self taught + 1 year of college web development. Passion for creating NFTs. I
                  have a background in Graphic Arts and 3D animation. My web3 experience is in NFT's on Avalanche and Polygon. The majority of my
                  web development experience is html, css, canvas, javascript, nodejs.
                </Text>
                <Divider mb="30px" />

                <Flex alignItems="center" justify="space-between">
                  <Text fontSize="2xl" fontWeight="bold" mb="10px">
                    Web Developments
                  </Text>
                  <Box w="50%" h="20px" bg="rgb(86,130,3,.3)"></Box>
                </Flex>
                <Link href="https://crypto.com/nft/collection/a313e1982ee3942fba7527f1a525fce5" isExternal>
                  <Text fontWeight="bold">
                    Christmasflakes.nft <ExternalLinkIcon mx="2px" />
                  </Text>
                </Link>

                <UnorderedList mb="10px">
                  <ListItem>
                    A Minting Dapp for a Generative art collection of
                    Snowflakes. The SnowFlakes metadata utilizes the animation
                    URL metadata property to create a snowflake particle
                    animation using HTML5 canvas.
                  </ListItem>
                  <ListItem>
                    The Snowflakes are ERC-721 tokens on Polygon Mainnet with a
                    maximum supply of 1111 and a limit of two free Snowflakes
                    per wallet.
                  </ListItem>
                  <ListItem>
                    Verified contract -{' '}
                    <Link
                      href="https://polygonscan.com/address/0x7EC7AcAF6e53e0B8a4fB8AC319fdd80958B38e03#code"
                      isExternal
                    >
                      PolyScan
                      <ExternalLinkIcon mx="2px" />
                    </Link>
                  </ListItem>
                </UnorderedList>
                <Link href="https://crypto.com/nft/profile/svgartist?tab=created&detail-page=PROFILE&event=svgartist&asset=a071562d0f9b29f32515c1a37c9ce63f&edition=f50068966b12a571d8bc9ebc086555f1" isExternal>
                  <Text fontWeight="bold">
                    NFT Collection on crypto.com <ExternalLinkIcon mx="2px" />
                  </Text>
                </Link>
                <UnorderedList mb="10px">
                  <ListItem>
                    Small mint on crypto.com of mandala's.
                  </ListItem>
                  <ListItem>
                    Built with Illustrator.
                  </ListItem>
                  <ListItem>Currently a work in progress.</ListItem>
                </UnorderedList>
                <Link href="https://opensea.io/collection/the-mixed-martial-artists" isExternal>
                  <Text fontWeight="bold">
                    NFT Collection on Opensea <ExternalLinkIcon mx="2px" />
                  </Text>
                </Link>

                <UnorderedList>
                  <ListItem>
                    Graphic collection of mixed martial artists.
                  </ListItem>
                  <ListItem>
                    Built with Illustrator.
                  </ListItem>
                  <ListItem>
                    A work in progress.
                  </ListItem>
                </UnorderedList>
                
                <Link href="https://rarible.com/token/polygon/0xc39f025fd1882b793792d37284d3db666136940e:4?tab=overview" isExternal>
                  <Text fontWeight="bold">
                    NFT Collection on Rarible <ExternalLinkIcon mx="2px" />
                  </Text>
                </Link>
                <Link href="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/24725983045875046905534710885728759177322124411964335273649058032971774164993" isExternal>
                  <Text fontWeight="bold">
                    NFT Collection on OpenSea <ExternalLinkIcon mx="2px" />
                  </Text>

                </Link>

                <UnorderedList>
                  <ListItem>
                    Voxel collection.
                  </ListItem>
                  <ListItem>
                    Built with VoxEdit / MagicaVoxel.
                  </ListItem>
                  <ListItem>
                    A work in progress.
                  </ListItem>
                </UnorderedList>
                <Link href="https://www.behance.net/gallery/152781045/MineralMerchant" isExternal>
                  <Text fontWeight="bold">
                    Figma Project <ExternalLinkIcon mx="2px" />
                  </Text>
                </Link>
                <UnorderedList>
                  <ListItem>
                    Mineral Merchant Landing.
                  </ListItem>
                  <ListItem>
                    Building in Figma.
                  </ListItem>
                  </UnorderedList>
                  <Link href="https://www.figma.com/file/nto7YKJ2JIj9LikfjHMt3K/Untitled?node-id=0%3A1" isExternal>
                  <Text fontWeight="bold">
                    Figma Project Take One<ExternalLinkIcon mx="2px" />
                  </Text>
                </Link>
                <Link href="https://www.figma.com/file/3lsDmWOnqTeHWhiGC3Lviu/Untitled?node-id=0%3A1" isExternal>
                  <Text fontWeight="bold">
                    Figma Project Take Two<ExternalLinkIcon mx="2px" />
                  </Text>
                </Link>
                <UnorderedList>
                  <ListItem>
                    Qi Gong Landing.
                  </ListItem>
                  <ListItem>
                    Building in Figma.
                  </ListItem>
                  <ListItem>
                    A work in progress.
                  </ListItem>
                </UnorderedList>
              </GridItem>
              <GridItem colSpan={1} mt="15px">
                <Image src={img}></Image>
                <Flex alignItems="center" justify="space-between" mt="20px">
                  <Text fontSize="2xl" fontWeight="bold" mb="10px">
                    Contact
                  </Text>
                  <Box w="50%" h="20px" bg="rgb(86,130,3,.3)"></Box>
                </Flex>
                <Flex>
                  <Text fontWeight="bold" pr="5px">
                    Address:
                  </Text>
                  <Text>British Columbia Canada</Text>
                </Flex>
                <Flex>
                  <Text fontWeight="bold" pr="5px">
                    Email:
                  </Text>
                  <Text>unimatrixnft@gmail.com</Text>
                </Flex>
                <Divider mt="5px" mb="30px" />
                <Flex alignItems="center" justify="space-between" mt="20px">
                  <Text fontSize="2xl" fontWeight="bold" mb="10px">
                    Tech Used
                  </Text>
                  <Box w="50%" h="20px" bg="rgb(86,130,3,.3)"></Box>
                </Flex>
                <UnorderedList mb="10px">
                  <ListItem>Illustrator </ListItem>
                  <ListItem>Photoshop </ListItem>
                  <ListItem>Figma </ListItem>
                  <ListItem>Blender</ListItem>
                  <ListItem>VS Code</ListItem>
                  <ListItem>Maya</ListItem>
                </UnorderedList>
                <Flex alignItems="center" justify="space-between" mt="20px">
                  <Text fontSize="2xl" fontWeight="bold" mb="10px">
                    Education
                  </Text>
                  <Box w="40%" h="20px" bg="rgb(86,130,3,.3)"></Box>
                </Flex>
                <Text fontWeight="bold">Dynamic Web Fundamentals 2016-17 </Text>
                <Text>Conestoga College</Text>
                <Text fontWeight="bold">Web and Mobile Development 2020-21 </Text>
                <Text>Trios College</Text>
                <Flex alignItems="center" justify="space-between" mt="20px">
                  <Text fontSize="2xl" fontWeight="bold" mb="10px">
                    Employment
                  </Text>
                  <Box w="30%" h="20px" bg="rgb(86,130,3,.3)"></Box>
                </Flex>

                <Text display="inline" fontWeight="bold">
                  Strokes Graphic Studio{' '}
                </Text>
                <Text paddingBottom="250" display="inline">Graphic Artist</Text>

                <Divider />
              </GridItem>
            </Grid>
          </Box>
        </main>
      </>
    </ChakraProvider>
  );
}

export default App;
