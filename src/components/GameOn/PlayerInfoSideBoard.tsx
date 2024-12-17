import Avatar from "@mui/material/Avatar"
import Box from "@mui/material/Box"
import Grid2 from "@mui/material/Grid2"
import Stack from "@mui/material/Stack"

interface PlayerInfoSideBoardProperties
{

}

function PlayerInfoSideBoard({}: PlayerInfoSideBoardProperties)
{

    return(
        <Grid2
            container
            display={"flex"}
            direction={"column"}
            // bgcolor={"yellow"}
            width={"100%"}
            height={"100dvh"}
            // justifyContent={"center"}
            alignItems={"center"}
            spacing={3}
            paddingTop={4}
            borderLeft={2}
            borderRight={2}
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
    )
}

export default PlayerInfoSideBoard