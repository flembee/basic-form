import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';

import { getResponse } from '../../services';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export function ResponseTab (props) {
  const classes = useStyles();

  const [formData, setFormData] = React.useState({});
  const [responseData, setResponseData] = React.useState([]);
  const [questions, setQuestions] = React.useState([]);
  

    React.useEffect(() => {
      if(props.formData){
        setQuestions(props.formData.questions)

        setFormData(props.formData)
      }
      var formId = props.formId
      if(formId !== undefined && formId !== ""){
        getResponse(formId)
        .then((data) => { 
   
            setResponseData(data)
           },
           error => {
           const resMessage =
               (error.response &&
               error.response.data &&
               error.response.data.message) ||
               error.message ||
               error.toString();
               console.log(resMessage);
           }
       );
      }
    },[props.formId, props.formData]);


    function getSelectedOption(qId, i, j){
      var oneResData = responseData[j];      
      var selectedOp = oneResData.response.filter(qss => qss.questionId === qId);
      if(selectedOp.length > 0){

        var finalOption = questions[i].options.find(oo => oo._id === selectedOp[0].optionId);
        return finalOption.optionText
      } else{
        return "not attempted"
      }
    }

  return (
       <div>
          <p> Responses</p>
          <div>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>User</TableCell>
                    {questions.map((ques, i)=>(
                      <TableCell key={i} align="right">{ques.questionText}</TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {responseData.map((rs, j) => (
                    <TableRow key={j}>
                      <TableCell component="th" scope="row">
                        {rs.userId}
                      </TableCell>
                      {questions.map((ques, i)=>(
                      <TableCell key={i} align="right">{getSelectedOption(ques._id, i,j)}</TableCell>
                    ))}
                      
                    </TableRow>
                  ))}
                </TableBody>
                
              </Table>
            </TableContainer>
          </div>
       </div>
  );
}