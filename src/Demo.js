import { Box ,Grid ,Typography,Button,TextField,Link,Card,CardContent

} from '@mui/material'
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import React,{useState} from 'react'
import background from './images/background.jpg'
function Demo() {
    const[tab,setTab]=useState('1')
    const handleChange = (event, newValue) => {
        setTab(newValue);
      };
  return (
<>
<Grid container 


>
<Grid item xs={12}  md={5} className='fix-width' >

    <Typography sx={{fontWeight:'bold',margin:'30px'}} align='left' variant='body2'>AIDETIC</Typography>
    <TabContext value={tab}>
        <TabPanel value='1' sx={{paddingTop:'0px!important'}}><Typography variant='h5'>Aloha!</Typography>
    <Typography variant='body2' sx={{margin:'5px'}}>Welcome back</Typography></TabPanel>
    <TabPanel value='2' sx={{paddingTop:'0px!important'}}>
    <Typography variant='h5'>Hey There!</Typography>
    <Typography variant='body2' sx={{margin:'5px'}}>Register your organization with us</Typography>
    </TabPanel>
        <Box sx={{ borderBottom: 1, borderColor: 'divider',display:'flex',justifyContent:'center' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="SIGN IN" value="1" />
            <Tab label="SIGN UP" value="2" />
            
          </TabList>
        </Box>
        <TabPanel value="1"><Box sx={{lineHeight:4,margin:'30px'}}>
    <TextField placeholder='Email Address' variant='filled' size='small' fullWidth   /><br/>
    <TextField placeholder='Password' variant='filled' type='password' size='small' fullWidth/>
    <Button variant='contained' fullWidth >SIGN IN</Button>
    <Grid container  >
        <Grid item xs={4} md={6} sx={{display:'flex',justifyContent:'flex-start' }}>
    <Link href='#' variant='body2'  > Forget password</Link>
    </Grid>
    <Grid item xs={8} md={6} sx={{display:'flex',justifyContent:'flex-end' }}>
    <Link href='#' variant='body2'  > Don't have an account? Create New</Link>
    </Grid>
    </Grid>
      </Box> </TabPanel>
        <TabPanel value="2"><Box sx={{lineHeight:4,margin:'30px'}}>
    <TextField placeholder='Name Of Organization' variant='filled' size='small' fullWidth   /><br/>
    <TextField placeholder='Domain' variant='filled' type='password' size='small' fullWidth/>
    <TextField placeholder='Phone Number' variant='filled' size='small' fullWidth   /><br/>
    <TextField placeholder='Email Address' variant='filled' type='password' size='small' fullWidth/>
    <TextField placeholder='First Name' variant='filled' size='small' fullWidth   /><br/>
    <TextField placeholder='Last Name' variant='filled' type='password' size='small' fullWidth/>
    <TextField placeholder='Username' variant='filled' size='small' fullWidth   />
    {/* <br/>
    <TextField placeholder='' variant='filled' type='password' size='small' fullWidth/> */}
    <Button variant='contained' fullWidth >SIGN IN</Button>
    
    </Box></TabPanel>
        
      </TabContext>
   


    {/* {toggle ? (
        <>
        <Typography variant='h5'>Aloha!</Typography>
    <Typography variant='body2' sx={{margin:'5px'}}>Welcome back</Typography>
    <Button  onClick={(e)=>{setToggle(true)}}  >SIGN IN</Button>
    <Button  onClick={(e)=>{setToggle(false)}}>SIGN UP</Button>
    <br/>
    <Box sx={{lineHeight:4,margin:'30px'}}>
    <TextField placeholder='Email Address' variant='filled' size='small' fullWidth   /><br/>
    <TextField placeholder='Password' variant='filled' type='password' size='small' fullWidth/>
    <Button variant='contained' fullWidth >SIGN IN</Button>
    <Grid container  >
        <Grid item xs={6} sx={{display:'flex',justifyContent:'flex-start' }}>
    <Link href='#' variant='body2'  > Forget password</Link>
    </Grid>
    <Grid item xs={6} sx={{display:'flex',justifyContent:'flex-end' }}>
    <Link href='#' variant='body2'  > Don't have an account? Create New</Link>
    </Grid>
    </Grid>
      </Box> 
        </>
        
    ):(
        <>
        <Typography variant='h5'>Hey There!</Typography>
    <Typography variant='body2' sx={{margin:'5px'}}>Register your organization with us</Typography>
    <Button  onClick={(e)=>{setToggle(true)}}  >SIGN IN</Button>
    <Button  onClick={(e)=>{setToggle(false)}}>SIGN UP</Button>
    <br/>
    <Box sx={{lineHeight:4,margin:'30px'}}>
    <TextField placeholder='Name Of Organization' variant='filled' size='small' fullWidth   /><br/>
    <TextField placeholder='Domain' variant='filled' type='password' size='small' fullWidth/>
    <TextField placeholder='Phone Number' variant='filled' size='small' fullWidth   /><br/>
    <TextField placeholder='Email Address' variant='filled' type='password' size='small' fullWidth/>
    <TextField placeholder='First Name' variant='filled' size='small' fullWidth   /><br/>
    <TextField placeholder='Last Name' variant='filled' type='password' size='small' fullWidth/>
    <TextField placeholder='Username' variant='filled' size='small' fullWidth   />
    {/* <br/>
    <TextField placeholder='' variant='filled' type='password' size='small' fullWidth/> */}
   

</Grid>
<Grid item  md={7}  sx={{ display: { xs: 'none', md: 'block' } }}>
<Box 

style={{ backgroundImage: `url(${background})`,height:'100vh',display:'flex',justifyContent:'center',alignItems:'center' }}
>
    {/* <Box > */}
        <Card sx={{backgroundColor:'rgb(233 235 237 / 40%)',width:'60%'}}>
        <CardContent>
        <Typography color='white' variant='h6' align='left'>Aiditec Presents You A New Way Of Hiring. </Typography>
        <Typography align='left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
             nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </Typography>
        </CardContent>
        </Card>
    {/* </Box> */}
    {/* <img src={background} style={{width:'100%',height:'100vh'}}/> */}
</Box>
</Grid>
</Grid>
</>
  )
}

export default Demo