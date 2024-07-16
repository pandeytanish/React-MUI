
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MUITypography from './Components/MUITypography';
import MUIButton from './Components/MUIButton';
import MUIDate from './Components/MUIDate';
import MUITextField from './Components/MUITextField';
import MUISelect from './Components/MUISelect';
import MUITest from './Components/MUITest';
import MUICounter from './Components/MUICounter';
import MUIForm from './MUIForm';
import SignUpForm from './SignUpForm';
import PasswordField from './PasswordField';
import TemplateDesign from './TemplateDesign';
import DebtBuyerInfo from './DebtBuyerInfo';
import MedicalDebtPackage from './MedicalDebtPackage';
import BuyersPortfolio from './BuyersPortfolio';
import BuyerCard from './Components/BuyerCard';
import MedicalDebt from './MedicalDebt';
import DetailsSection from './DetailsSection';
import TestMui from './TestMui';
import VerificationFirst from './Verification Flow/VerificationFirst';



const theme = createTheme({
  palette: {
    background: {
      paper: '#ffffff', // Ensure the 'paper' background is defined
    },
  },
});
function App() {
  return (
   <>
   
{/* <MUITypography/> */}
{/* <MUIButton/> */}
{/* <MUIDate/> */}
{/* <MUITextField/>/ */}
{/* <MUISelect/> */}
{/* <MUITest/> */}
{/* <MUICounter/> */}
{/* <MUIForm/> */}
{/* <SignUpForm/> */}
{/* <PasswordField/> */}
{/* <TemplateDesign/> */}
{/* <DebtBuyerInfo/>  */}
{/* <MedicalDebtPackage/> */}
{/* <BuyersPortfolio/> */}
{/* <BuyerCard/> */}
{/* <MedicalDebt/> */}
{/* <DetailsSection/> */}
{/* <TestMui/> */}
<ThemeProvider theme={theme}>
      <CssBaseline />
     <VerificationFirst/>
    </ThemeProvider>
   </>
  );
}


export default App;
