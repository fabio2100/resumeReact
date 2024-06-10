import { Box, TextField } from "@mui/material";
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';


const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));


export default function TechCard({logo}){
  return <>
    <div className="mainCard techCard">
      <img className="imgTech" src={logo} alt="techImage"></img>
      <p>Nombre</p>
      <TextField
  id="outlined-read-only-input"

  defaultValue="He trabajado con react desde hace tiempo ya. Mis proyectos personales actualemnte hacen uso de esta tecnilogía al igual que en el marco profesioanl también he trabajado con react. Actualmente nos encontramos"
  InputProps={{
    readOnly: true,
  }}
  multiline
  variant="standard"
  maxRows={4}
  fullWidth
/>
      <Box sx={{width:'100%'}}>
        <BorderLinearProgress variant="determinate" value={80} />
      </Box>
    </div>
  </>
}