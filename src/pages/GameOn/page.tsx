import Grid2 from "@mui/material/Grid2";
import GameBoard from "./GameBoard";
import PlayerInfoSideBoard, {PlayerInfoSideBoardProperties} from "./PlayerInfoSideBoard";

const numOfCells = 20;

const MockUser1Info: PlayerInfoSideBoardProperties = 
{
    username: "Helio",
    avatar: "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/avocado_scream_avatar_food-512.png",
    numOfMatchs: 3,
    numOfWonMatchs: 1
}

const MockUser2Info: PlayerInfoSideBoardProperties = 
{
    username: "Challenger",
    avatar: "https://cdn0.iconfinder.com/data/icons/emoji-3-5/64/thinking_emoji_wondering-512.png",
    numOfMatchs: 3,
    numOfWonMatchs: 0
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

            <PlayerInfoSideBoard setupProp={MockUser1Info} />

            <GameBoard numOfCells={numOfCells} />

            <PlayerInfoSideBoard setupProp={MockUser2Info} />

        </Grid2>
    )
}

export default GameOnPage;