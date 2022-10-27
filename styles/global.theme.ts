export interface TypeTheme {
    colors: {
        mainFontColor: string;
        backgroundColor: string;
        logoBg: string;
    }
    font: {
        fontFamily: string;
        h3FontColor: string;
        pFontColor: string;
    }
    open: boolean;
}

const theme: TypeTheme = {
    colors: {
        mainFontColor: 'white',
        backgroundColor: 'rgba(62, 70, 84, 1)',
        logoBg: '#4B5563',
    },
    font: {
        fontFamily: 'Patrick Hand, cursive;',
        h3FontColor: '#FFFFFF',
        pFontColor: '#cdc8c8',
    },
    open: false,
}

export default theme