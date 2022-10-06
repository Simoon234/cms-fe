export interface TypeTheme {
    colors: {
        mainFontColor: string;
        backgroundColor: string;
    }
    font: {
        fontFamily: string;
        h3FontColor: string;
    }
}

export const theme: TypeTheme = {
    colors: {
        mainFontColor: 'white',
        backgroundColor: 'rgba(62, 70, 84, 1)'
    },
    font: {
        fontFamily: 'Patrick Hand, cursive;',
        h3FontColor: '#FFFFFF'
    }
}