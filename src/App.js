import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import CardDisplayer from './components/CardDisplayer';
import MainCard from './components/MainCard'
import TechCard from './components/TechCard';
import './App.css'
import { useTranslation } from "react-i18next";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const {t, i18n} = useTranslation(["translation"])
const changeLanguage = ( ) =>{
  i18n.changeLanguage("es")
}

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <main>
      <CardDisplayer className="cardDisplayer">
        <TechCard logo={"assets/img/icons8-react-80.png"}/>
        <TechCard logo={"assets/img/icons8-php-100.png"}/>
        <TechCard logo={"assets/img/icons8-codeigniter-96.png"}/>
        <TechCard logo={"assets/img/icons8-nodejs-96.png"}/>
      </CardDisplayer>
      </main>
    </ThemeProvider>
  );
}

