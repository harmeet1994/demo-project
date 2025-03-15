import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Tabs,
  Tab,
  Paper,
  CssBaseline
} from '@mui/material';
import { Home, Favorite, Settings, Search } from '@mui/icons-material';

// Tab panel component to display content
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`bottom-tabpanel-${index}`}
      aria-labelledby={`bottom-tab-${index}`}
      style={{
        height: 'calc(100vh - 56px)', // Full height minus tab bar height
        overflow: 'auto',
        width: '100%'
      }}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>{children}</Box>
      )}
    </div>
  );
}

function BottomTabsFullContent() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      overflow: 'hidden'
    }}>
      <CssBaseline />

      {/* Content area - takes full page */}
      <Box sx={{ flexGrow: 1, overflow: 'hidden' }}>
        <TabPanel value={value} index={0}>
          <Box sx={{
            bgcolor: '#f5f5f5',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2rem'
          }}>
            Home Content - Full Page
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Box sx={{
            bgcolor: '#e3f2fd',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2rem'
          }}>
            Favorites Content - Full Page
          </Box>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Box sx={{
            bgcolor: '#e8f5e9',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2rem'
          }}>
            Search Content - Full Page
          </Box>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Box sx={{
            bgcolor: '#fff3e0',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2rem'
          }}>
            Settings Content - Full Page
          </Box>
        </TabPanel>
      </Box>

      {/* Bottom tabs */}
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <AppBar position="static" color="default" sx={{ top: 'auto', bottom: 0 }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            indicatorColor="primary"
            textColor="primary"
            aria-label="bottom navigation tabs"
          >
            <Tab icon={<Home />} label="Home" />
            <Tab icon={<Favorite />} label="Favorites" />
            <Tab icon={<Search />} label="Search" />
            <Tab icon={<Settings />} label="Settings" />
          </Tabs>
        </AppBar>
      </Paper>
    </Box>
  );
}

export default BottomTabsFullContent;