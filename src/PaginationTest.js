import React,{useEffect,useState} from 'react'
import {Typography,Card, CardContent,Grid} from '@mui/material';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import axios from 'axios'
function PaginationTest() {
    const [page, setPage] = useState(1);
    const [postData,setPostData] = useState([])
    const handleChange = (event, value) => {
      setPage(value);
    };
    useEffect(()=>{
      // `https://jsonplaceholder.typicode.com/posts/${this.state.postName}`
      axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${page}`).then((r)=>{
      console.log(r.data)
      setPostData(r.data)
      }).catch((e)=>{
        console.log(e)
      })
    },[page])

    
  return (
    <Stack>
      <Typography>Page: {page}</Typography>
    <Pagination count={20} page={page} onChange={handleChange} sx={{display:'flex',justifyContent:'center'}}/>
      {postData.map((data,key)=>{
        return(
          <Card key={key} sx={{border:'1px solid',margin:'10px'}}>
            <CardContent>
              <Grid container >
                <Grid item xs={1}>
              <Typography sx={{fontWeight:'bold'}} >Id</Typography>
              </Grid>
              <Grid item xs={3}>
              <Typography sx={{fontWeight:'bold'}}>Name</Typography>
              </Grid>
              <Grid item xs={2}>
              <Typography sx={{fontWeight:'bold'}}>Email</Typography>
              </Grid>
              <Grid item xs={6}>
              <Typography sx={{fontWeight:'bold'}}>Body</Typography>
              </Grid>
              </Grid>
              <Grid container>
              <Grid item xs={1} >
              <Typography >{data.id}</Typography>
              </Grid>
              <Grid item xs={3}>
              <Typography >{data.name}</Typography>
              </Grid>
              <Grid item xs={2}>
              <Typography >{data.email}</Typography>
              </Grid>
              <Grid item xs={6}>
              <Typography  sx={{overflow:'hidden'}}>{data.body}</Typography>
              </Grid>
              </Grid>
              
              
            </CardContent>
          </Card>
        )
      })

      }
    
  </Stack>
  )
}

export default PaginationTest