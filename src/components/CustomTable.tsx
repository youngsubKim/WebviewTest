import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import Radio from "@mui/material/Radio";
import RadioGroup, { useRadioGroup } from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";


{/* <RadioGroup name="use-radio-group" defaultValue="first">
  <MyFormControlLabel value="first" label="First" control={<Radio />} />
  <MyFormControlLabel value="second" label="Second" control={<Radio />} />
</RadioGroup> */}

interface QuestionChoiceList {
  choiceScore: number;
  choiceDirection: string;
  choiceNo: number;
}

interface Props {
  title?: string;
  option: QuestionChoiceList[];
}

const CustomTable = ({ title, option }: Props) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead sx={{ backgroundColor: "#bbd6e3" }}>
          <TableRow>
            <TableCell>{title}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {option.map((row) => (
            <TableRow
              key={title}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Radio />
                {row.choiceDirection}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;

{
  /* <TableContainer component={Paper}>
<Table sx={{ minWidth: 650 }} aria-label="simple table">
  <TableHead>
    <TableRow>
      <TableCell>Dessert (100g serving)</TableCell>
      <TableCell align="right">Calories</TableCell>
      <TableCell align="right">Fat&nbsp;(g)</TableCell>
      <TableCell align="right">Carbs&nbsp;(g)</TableCell>
      <TableCell align="right">Protein&nbsp;(g)</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    {rows.map((row) => (
      <TableRow
        key={row.name}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.calories}</TableCell>
        <TableCell align="right">{row.fat}</TableCell>
        <TableCell align="right">{row.carbs}</TableCell>
        <TableCell align="right">{row.protein}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>
</TableContainer> */
}


// export default function ControlledRadioButtonsGroup() {
//     const [value, setValue] = React.useState('female');
  
//     const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//       setValue((event.target as HTMLInputElement).value);
//     };
  
//     return (
//       <FormControl>
//         <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
//         <RadioGroup
//           aria-labelledby="demo-controlled-radio-buttons-group"
//           name="controlled-radio-buttons-group"
//           value={value}
//           onChange={handleChange}
//         >
//           <FormControlLabel value="female" control={<Radio />} label="Female" />
//           <FormControlLabel value="male" control={<Radio />} label="Male" />
//         </RadioGroup>
//       </FormControl>
//     );
//   }