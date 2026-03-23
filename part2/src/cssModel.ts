
type GapType = 'margin' | 'padding';
type PositionType = 'top' | 'right' | 'left' | 'bottom';

type GapCss = `${GapType}-${PositionType}` | GapType

type SizeType = 'rem' | 'em' | 'px' | '%';

type SizeCss = `${number}${SizeType}`;

type MarginPadding = {
    [key in GapCss]?: SizeCss
}

const margin : MarginPadding = {
    "margin": '10px',
    "margin-bottom" : '2%'
}

type ChessLetters = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H'

type ChessNumbers = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

type ChessPosition = `${ChessLetters}${ChessNumbers}`

let pawnPosition: ChessPosition = 'B8';

