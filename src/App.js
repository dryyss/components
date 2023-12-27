import "./App.css";
import { MuiButton } from "./Components/Button/MuiButton";
import { MuiTypography } from "./Components/Typography/MuiTypography";
import MuiTextField from "./Components/TextField/MuiTextField";
import MuiSelect from "./Components/Select/MuiSelect";
import MuiRadioButton from "./Components/RadioButton/MuiRadioButton";
import MuiCheckbox from "./Components/Checkbox/MuiCheckbox";
import MuiSwitch from "./Components/Switch/MuiSwitch";
import MuiRating from "./Components/Rating/MuiRating";
import MuiAutoComplete from "./Components/AutoClomplete/MuiAutoComplete";
import MuiLayout from "./Components/Layout/MuiLayout";
import MuiCard from "./Components/Card/MuiCard";
import MuiAccordion from "./Components/Accordion/MuiAccordion";
import MuiImageList from "./Components/ImageList/MuiImageList";
import MuiNavbar from "./Components/Navbar/MuiNavbar";
import MuiLink from "./Components/Link/MuiLink";
import MuiBreadcrumbs from "./Components/Breadcrumbs/MuiBreadcrumbs";
import MuiDrawer from "./Components/Drawer/MuiDrawer";
import MuiSpeedDial from "./Components/SpeedDial/MuiSpeedDial";
import MuiBottomNavigation from "./Components/BottomNavigation/MuiBottomNavigation";
import MuiAvatar from "./Components/Avatar/MuiAvatar";
import MuiBadge from "./Components/Badge/MuiBadge";
import MuiList from "./Components/List/MuiList";
import MuiChip from "./Components/Chip/MuiChip";
import MuiTooltip from "./Components/Tooltip/MuiTooltip";
import MuiTable from "./Components/Table/MuiTable";
import MuiAlert from "./Components/Alert/MuiAlert";
import MuiSnackbar from "./Components/MuiSnackbar";
import MuiDialog from "./Components/Dialog/MuiDialog";
import MuiProgress from "./Components/Progress/MuiProgress";
import MuiDatePicker from "./Components/DatePicker/MuiDatePicker";
import MuiResponsiveness from "./Components/Responsiveness/MuiResponsiveness";
import CoachPlanner from "./Coachplanner/CoachPlanner";

function App() {
  return (
    <div className="App">
      {" "}
      <MuiNavbar /> <MuiTypography /> <MuiButton /> <MuiTextField /> <MuiSelect />{" "}
      <MuiRadioButton /> <MuiCheckbox /> <MuiSwitch /> <MuiRating /> <MuiAutoComplete />{" "}
      <MuiLayout /> <MuiCard /> <MuiAccordion /> <MuiImageList /> <MuiLink /> <MuiBreadcrumbs />{" "}
      <MuiDrawer /> <MuiAvatar /> <MuiBadge /> <MuiBottomNavigation /> <MuiList /> <MuiChip />{" "}
      <MuiTooltip /> <MuiTable /> <MuiSpeedDial /> <MuiAlert /> <MuiSnackbar /> <MuiDialog />{" "}
      <MuiProgress /> <MuiResponsiveness /> <MuiDatePicker />{" "}
    </div>
  );
}

export default App;
