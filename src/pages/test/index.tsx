import { useTheme as useNextTheme } from 'next-themes'
import { Grid, Switch, useTheme, Navbar, Image, Card, Spacer, Container, Text } from "@nextui-org/react";
import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";
import styled from 'styled-components';
const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 5px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

export default function Test() {
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();
  const textColor = isDark ? 'black' : 'white';
  const handleChange = (e: { target: { checked: any; }; }) => { setTheme(e.target.checked ? 'dark' : 'light');  }
  console.log(isDark);
  const MockItem = ({ text }) => {
    return (
      <Card css={{ h: "$20", $$cardColor: '$colors$primary' }}>
        <Card.Body>
          <Text h6 size={15} color={textColor} css={{ m: 0 }}>
            {text}
          </Text>
        </Card.Body>
      </Card>
    );
  };
  return (
    <>
      <Navbar variant="sticky" >
        <Navbar.Brand>
          <Image
            width={32}
            height={32}
            src="favicon.ico"
            alt="Default Image"
            objectFit="cover"
          />
        </Navbar.Brand>
        <Navbar.Content>
          <Navbar.Content>
            <Navbar.Content hideIn="xs">
              <Navbar.Link href="#">Projects</Navbar.Link>
              <Navbar.Link href="#">About</Navbar.Link>
            </Navbar.Content>
            <Switch
              checked={isDark}
              onChange={handleChange}
              size="sm"
              iconOn={<MoonIcon filled size={undefined} height={undefined} width={undefined} label={undefined} />}
              iconOff={<SunIcon filled size={undefined} height={undefined} width={undefined} label={undefined} />}
            />
          </Navbar.Content>
        </Navbar.Content>
      </Navbar>

      <Container lg gap={2} css={{ mt: '$10' }}>
        <Grid.Container gap={2} justify="center">
          <Grid xs={6}>
            <MockItem text="1 of 2" />
          </Grid>
          <Grid xs={6}>
            <MockItem text="2 of 2" />
          </Grid>
          <Grid xs={6}>
            <MockItem text="1 of 3" />
          </Grid>
          <Grid xs={3}>
            <MockItem text="2 of 3" />
          </Grid>
          <Grid xs={3}>
            <MockItem text="3 of 3" />
          </Grid>
          <Grid xs={3}>
            <MockItem text="1 of 4" />
          </Grid>
          <Grid xs={3}>
            <MockItem text="2 of 4" />
          </Grid>
          <Grid xs={3}>
            <MockItem text="3 of 4" />
          </Grid>
          <Grid xs={3}>
            <MockItem text="4 of 4" />
          </Grid>
          <Grid xs={3}>
            <MockItem text="1 of 3" />
          </Grid>
          <Grid xs={6}>
            <MockItem text="2 of 3" />
          </Grid>
          <Grid xs={3}>
            <MockItem text="3 of 3" />
          </Grid>
        </Grid.Container>


      </Container>
    </>
  );
}