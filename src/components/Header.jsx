import { Typography, Box, useTheme, Button } from "@mui/material";
import AddOutlineIcon from "@mui/icons-material/AddOutlined";
import { tokens } from "../theme";

const Header = ({ title, subtitle, type }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  console.log("Title : " + type)
  return (
    <Box mb="20px"  display="flex" justifyContent="space-between" alignItems="center">
      <Box>
        <Typography
          variant="h2"
          color={colors.grey[100]}
          fontWeight="bold"
          sx={{ m: "0 0 5px 0" }}
        >
          {title}
        </Typography>
        <Typography variant="h5" color={colors.greenAccent[400]}>
          {subtitle}
        </Typography>
      </Box>
      <Box 
      hidden={type !== "add"}>
        <Button
          sx={{
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
          }}
        >
          <AddOutlineIcon sx={{ mr: "10px" }} />
          Add New
        </Button>
      </Box>
      <Box 
      hidden={type !== "download"}>
        <Button
          sx={{
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
          }}
        >
          <AddOutlineIcon sx={{ mr: "10px" }} />
          Download Reports
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
