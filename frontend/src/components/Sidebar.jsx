import React, { useState } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState('Explore');
  const navigate = useNavigate();

  const handleItemClick = (text) => {
    setSelectedItem(text);

    // Navigate based on text
    switch (text) {
      case 'Explore':
        navigate('/home');
        break;
      case 'Join Event':
        navigate('/joinevent');
        break;
      case 'Create Event':
        navigate('/createevent');
        break;
    };
  }

    return (
      <Box
        sx={{
          width: '25vw',
          height: '100vh',
          backgroundColor: 'background.paper',
          borderRight: 1,
          borderColor: 'divider',
          position: 'fixed', // Add fixed position
          top: 0, // Align to top
          left: 0, // Align to left
          overflowY: 'auto', // Add scroll for sidebar content if it exceeds viewport height
          zIndex: 1000,
        }}
      >
        <Box
          sx={{
            padding: '2vh 0vw',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'primary.main',
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: 'bold',
              color: 'white',
            }}
          >
            Planify
          </Typography>
        </Box>
        <Divider />

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#578E7E'
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: 'plain',
              color: 'white',
            }}
          >
            Welcome Smit
          </Typography>
        </Box>

        <List>
          {['Explore', 'Join Event', 'Create Event'].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton
                onClick={() => handleItemClick(text)}
                sx={{
                  backgroundColor: selectedItem === text ? 'white' : 'white',
                  color: selectedItem === text ? 'black' : 'inherit',
                }}
              >
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Your created Events', 'Event joined by You'].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton
                onClick={() => handleItemClick(text)}
                sx={{
                  backgroundColor: selectedItem === text ? 'white' : 'inherit',
                  color: 'black',
                }}
              >
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Logout'].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton
                onClick={() => handleItemClick(text)}
                sx={{
                  backgroundColor: selectedItem === text ? 'red' : 'inherit',
                  '&:hover': {
                    backgroundColor: selectedItem === text ? 'red' : 'red',
                    color: 'white',
                  },
                  color: selectedItem === text ? 'white' : 'inherit',
                }}
              >
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    );
  };