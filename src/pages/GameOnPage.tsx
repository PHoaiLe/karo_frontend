import Grid2 from "@mui/material/Grid2";
import GameBoard from "../components/GameOn/GameBoard";
import PlayerInfoSideBoard from "../components/GameOn/PlayerInfoSideBoard";

const numOfCells = 20;

function GameOnPage()
{

    return(
        <Grid2 
            columns={3}
            display={"flex"}
            direction={"column"}
            justifyContent={"center"}
            width="100%">

            <PlayerInfoSideBoard />

            <GameBoard numOfCells={numOfCells} />

            <PlayerInfoSideBoard />

        </Grid2>
    )
}

export default GameOnPage;