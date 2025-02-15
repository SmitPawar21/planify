import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Button, Divider } from '@mui/material';

export default function OneCard() {
  return (
    <Card sx={{ width: '40%', height: '60vh', backgroundColor: 'white' }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>

          <Divider />

          <div style={{display:'flex', width:'100%', justifyContent:'space-between', alignItems:'center'}}>
            <Typography gutterBottom variant="body" component="div" sx={{width:'50%'}}>
              Created By  Chandrashekar
            </Typography>
            <Typography gutterBottom variant="body" component="div" sx={{width:'50%' }}>
              Participants  8/10
            </Typography>
          </div>

          <Divider />

          <Typography variant="body2" sx={{ color: 'text.secondary', marginBottom: '2vh', textAlign:'left !important' }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>

          <Divider />

          <Typography gutterBottom variant="body" component="div" sx={{ textAlign: 'left' }}>
            Venue: Ghatkopar (East), Mumbai
          </Typography>
          <Typography gutterBottom variant="body" component="div" sx={{ textAlign: 'left' }}>
            Timings: 21st Aug to 23rd Aug (12:00 - 13:00)
          </Typography>

          <Divider />

          <Button sx={{ width: '50%', backgroundColor: '#1976D2', color: 'white', float: 'left', marginTop: '10%' }}>
            Join
          </Button>

        </CardContent>
      </CardActionArea>
    </Card>
  );
}

