import Stack from "@mui/material/Stack";
import Grid2 from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";

const numOfCells = 20;

const createCells = () =>
{
    const cells = [...Array(numOfCells*numOfCells)].map((_, index) => 
    {
        return(
            <Grid2 display={"flex"} bgcolor={"#F1F1F1"}
                height={50} width={50}
                justifyContent={"center"} justifyItems={"center"}
                alignItems={"center"}
                sx={{
                    ":hover": {
                        bgcolor: "#D9D9D9"
                    }
                }}
                >
                {/* {index} */}
            </Grid2>
        )
    })

    return cells
}


function GameOnPage()
{

    return(
        <Grid2 
            columns={3}
            display={"flex"}
            direction={"column"}
            justifyContent={"center"}
            width="100%">

            <Grid2
                container
                display={"flex"}
                direction={"column"}
                // bgcolor={"yellow"}
                width={"100%"}
                height={"100dvh"}
                borderRight={3}
                // justifyContent={"center"}
                alignItems={"center"}
                spacing={3}
                paddingTop={4}
            >
                <Stack
                    key={"game-score-table"}
                    display={"flex"}
                    bgcolor={"#F1F1F1"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    borderRadius={4}
                    padding={1.5}
                >
                    <Stack
                        width={"100%"}
                        // height={100}
                        display={"flex"}
                        direction={"row"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        spacing={1.5}
                    >
                        <Box width={40} height={40} bgcolor={"#FF0000"}></Box>
                        <Box width={40} height={40} bgcolor={"#D9D9D9"}></Box>
                        <Box width={40} height={40} bgcolor={"#D9D9D9"}></Box>
                    </Stack>
                </Stack>

                <Stack
                    key={"player-box"}
                    width={"100%"}
                    bgcolor={"green"}
                    justifyContent={"center"}
                    alignItems={"center"}
                >
                    <Box position={"relative"} width={"100%"} height={86} bgcolor={"#D9D9D9"}></Box>
                    <Box position={"absolute"}><Avatar alt="player_avatar" src="" sx={{width: 100, height: 100}}/></Box>
                </Stack>

                <Box key={"player-id"} display={"flex"} width={"100%"} justifyContent={"center"} alignItems={"center"} 
                    fontSize={22} fontWeight={300}
                    >
                    Challenger
                </Box>

                <Box key={"countdown-clock"} display={"flex"} justifyContent={"center"} alignItems={"center"}
                    width={"90%"} borderRadius={4} bgcolor={"#F1F1F1"} boxShadow={1}

                    fontSize={50} fontWeight={400} color={"red"}
                >
                    1:42
                </Box>
            </Grid2>

            <Grid2 container overflow={"auto"}
                height={"100dvh"}
                // width={"calc(2*dvw/3)"}
                maxWidth={1000}
                justifyContent={"center"} justifyItems={"center"}
                sx={{
                    // '--Grid-borderWidth': '1px',
                    borderTop: 'var(--Grid-borderWidth) solid',
                    borderLeft: 'var(--Grid-borderWidth) solid',
                    borderColor: '#94C4DF',
                    '& > div': {
                    '--Grid-borderWidth': '1px',
                    borderRight: 'var(--Grid-borderWidth) solid',
                    borderBottom: 'var(--Grid-borderWidth) solid',
                    borderColor: '#94C4DF',
                    },

                    scrollBehavior: "smooth",
                    scrollbarWidth: "none"
                }}>
                {createCells()}
            </Grid2>

            <Grid2
                container
                display={"flex"}
                direction={"column"}
                width={"100%"}
                height={"100dvh"}
                borderLeft={3}
                alignItems={"center"}
                spacing={3}
                paddingTop={4}
            >
                <Stack
                    key={"game-score-table"}
                    display={"flex"}
                    bgcolor={"#F1F1F1"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    borderRadius={4}
                    padding={1.5}
                >
                    <Stack
                        width={"100%"}
                        // height={100}
                        display={"flex"}
                        direction={"row"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        spacing={1.5}
                    >
                        <Box width={40} height={40} bgcolor={"#FF0000"}></Box>
                        <Box width={40} height={40} bgcolor={"#D9D9D9"}></Box>
                        <Box width={40} height={40} bgcolor={"#D9D9D9"}></Box>
                    </Stack>
                </Stack>

                <Stack
                    key={"player-box"}
                    width={"100%"}
                    bgcolor={"green"}
                    justifyContent={"center"}
                    alignItems={"center"}
                >
                    <Box position={"relative"} width={"100%"} height={86} bgcolor={"#D9D9D9"}></Box>
                    <Box position={"absolute"}><Avatar alt="player_avatar" src="" sx={{width: 100, height: 100}}/></Box>
                </Stack>

                <Box key={"player-id"} display={"flex"} width={"100%"} justifyContent={"center"} alignItems={"center"} 
                    fontSize={22} fontWeight={300}
                    >
                    Challenger
                </Box>

                <Box key={"countdown-clock"} display={"flex"} justifyContent={"center"} alignItems={"center"}
                    width={"90%"} borderRadius={4} bgcolor={"#F1F1F1"} boxShadow={1}

                    fontSize={50} fontWeight={400} color={"#E3DDDD"}
                >
                    1:42
                </Box>
            </Grid2>

        </Grid2>
    )
}

export default GameOnPage;