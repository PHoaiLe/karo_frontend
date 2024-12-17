import Grid2 from "@mui/material/Grid2"
import GameCell, { GameCellProperties } from "./GameCell"
import { useRef, useState } from "react"
import { GameCellValue } from "./GameOnConstants"

interface GameBoardProperties
{
    numOfCells: number
}

const Ochar = "https://cdn3.iconfinder.com/data/icons/letters-and-numbers-1/32/letter_O_blue-512.png"
const Xchar = "https://cdn3.iconfinder.com/data/icons/letters-and-numbers-1/32/letter_X_red-512.png"

function GameBoard({numOfCells}: GameBoardProperties)
{
    const [propOfCells, setPropOfCells] = useState<GameCellProperties[]>([...Array(numOfCells*numOfCells)].fill("").map((value: string, index: number) => {
        const prop: GameCellProperties = 
        {
            id: index,
            value: GameCellValue.NONE,
            icon: value
        }

        return prop
    }))

    const currentTurn = useRef<GameCellValue>(GameCellValue.X)


    const cellsDisplay = propOfCells.map((cellProp, index) =>
    {
        return(
            <GameCell key={index} setupProp={cellProp} onClickCallback={handleCellOnClickCallback}/>
        )
    })


    function handleCellOnClickCallback(cellId: number)
    {
        const newPropsOfCells = [...propOfCells]

        let nextValue = GameCellValue.X
        let nextIcon = Xchar

        if(currentTurn.current == GameCellValue.X)
        {
            nextValue = GameCellValue.O
            nextIcon = Ochar 
        }

        newPropsOfCells[cellId].value = nextValue
        newPropsOfCells[cellId].icon = nextIcon
        
        setPropOfCells(newPropsOfCells)
        currentTurn.current = nextValue
    }

    return(
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
                // borderLeft: 'var(--Grid-borderWidth) solid',
                borderRight: 'var(--Grid-borderWidth) solid',
                borderBottom: 'var(--Grid-borderWidth) solid',
                borderColor: '#94C4DF',
                },
                
                scrollBehavior: "smooth",
                scrollbarWidth: "none"
            }}>
            {cellsDisplay}
        </Grid2>
    )
}


export default GameBoard