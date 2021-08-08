import React, { useEffect, useState } from 'react'; 
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
  // Css Part:
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: 600,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
}));

const message = `Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support. `;

export default function AutoGridNoWrap() {

  //Code starts:
  const classes = useStyles();                              // Internal styling
  const [quotes,setQuotes] = useState([]);                  // api object saved in quotes
  const [page,setPage] = useState(0);                       // 
  const [show,setShow] = useState(false);                   // for load button
  
  const effect = async () =>{
    // console.log("page",page);
    let result = await axios.get("http://localhost:4040/?count=4&page="+page)
    // console.log("data",result.data,result.data.quotes);
    let newquotesData = quotes.concat(result.data.quotes)
 
    let newPage = page+1
    setPage(newPage)
    setQuotes(newquotesData)
    if(result.data.quotes.length === 0){
      setShow(true)
    }
    else{
      setShow(false)
    }
  }

  useEffect(() => {effect()},[])


  return (
    
    <div className={classes.root}>  
      {quotes.map((ele,i)=>{
        return (
        <Paper className={classes.paper} key={i}>
        <Grid container wrap="nowrap" spacing={2}>
          
          <Grid item xs zeroMinWidth>
            <Typography noWrap>Quote: {ele.quote}</Typography>
            <Typography noWrap>By: {ele.author}</Typography>
            <Typography noWrap>{ele.likes} Likes </Typography>
          </Grid>
        </Grid>
      </Paper> 
        )
      })}

      <div className='text-center'>
      <br/>
      {show?<div className='text-danger'>No more data</div>:""}
      <br/>
      <button disabled={show} type="submit" className="btn btn-primary mb-2" onClick={()=>effect()}>Load More </button>
      </div>
      
    </div>
  );
}
