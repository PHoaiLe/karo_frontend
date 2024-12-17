import Grid2 from "@mui/material/Grid2"
import { GameCellValue } from "./GameOnConstants"
import Button from "@mui/material/Button"

export interface GameCellProperties
{
    id: number | string
    value: GameCellValue,
    icon: string
}

interface SetupProp
{
    setupProp: GameCellProperties,
    onClickCallback: (cellId: number) => void
}


function GameCell({setupProp, onClickCallback}: SetupProp)
{

    const hoverBg = setupProp.value === GameCellValue.NONE ? "#D9D9D9" : undefined

    function handleOnClick()
    {
        if(setupProp.value != GameCellValue.NONE)
        {
            return
        }

        onClickCallback(setupProp.id as number)
    }

    const iconDisplay = setupProp.icon.length > 0 ? 
    (<img alt="game-cell"
        height={"80%"} width={"80%"}
        src={setupProp.icon} loading="lazy"/>) : null

    return(
        <Grid2 display={"flex"} bgcolor={"#F1F1F1"}
            height={50} width={50}
            justifyContent={"center"} justifyItems={"center"}
            alignItems={"center"}
            sx={{
                ":hover": {
                    bgcolor: `${hoverBg}`
                }
            }}
            
            >
                <Button sx={{height: 50, width: 50}}
                    onClick={handleOnClick}
                >
                    {iconDisplay}
                </Button>
        </Grid2>
    )
}

export default GameCell