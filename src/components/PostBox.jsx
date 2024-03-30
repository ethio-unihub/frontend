import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import axios from 'axios';

export default function PostBox({userName}){
const [postContent, setPostContent] = useState('');
const [selectedDepartment, setSelectedDepartment] = useState(null); 
const [selectedSubject, setSelectedSubject] = useState(null);
const [selectedFile, setSelectedFile] = useState(null);

const handleSubmit = async (event) => {
    event.preventDefault(); 
  
    const formData = {postContent: postContent, file: selectedFile, department: selectedDepartment, subject: selectedSubject};
  
    console.log(formData);
    try {
        const response = await axios.post('/your-backend-endpoint', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
    
       
        console.log(response.data);
      } catch (error) {
       
        console.error('Error sending data:', error);
      }
  };

const handlePostChange = (event) => {
    setPostContent(event.target.value);
    
};

const handleDepartmentChange = (event) => {
    setSelectedDepartment(event.target.value);
    
};

const handleSubjectChange = (event) => {
    setSelectedSubject(event.target.value);
    
};

const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

function stringToColor(string) {
    let hash = 0;
    let i;
  
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
  
    return color;
  }
  
  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }


    return(
        <div>
            <div className='inline-flex justify-end w-[100%]'>
                <button
                type="submit"
                className="relative inline-flex items-center p-3 pt-1 pb-1 mb-5 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={handleSubmit}
                >post</button>
            </div>
            <div className='inline-flex items-start w-[100%] gap-2'>
                <Avatar {...stringAvatar(userName)} />

                <TextField
                    id="outlined-multiline-flexibleoutlined-multiline-flexible"
                    label="Post"
                    placeholder="Something"
                    onChange={handlePostChange}
                    multiline
                    maxRows={4}
                    sx={{
                        width: '100%',
                        '& .MuiInputBase-input': {
                            color: 'grey', 
                            width: '100%'
                        },
                        '& .MuiInputLabel-root': { 
                            fontSize: '20px', 
                            color: 'grey',   
                        },
                        '& .MuiOutlinedInput-root': { 
                            borderColor: 'green',
                        },
                        }}
                />
            </div>
            <div className='md:inline-flex items-center justify-evenly w-[100%] p-1'>
                <input type="file" onChange={handleFileChange} className='text-[grey] fill-blue-700'/>
                <div className='inline-flex items-center justify-evenly w-[100%] p-1'>
                    <div className='inline-flex items-center gap-2'>
                        <InputLabel id="Department"
                            sx={{
                                color:'grey',
                                }}
                        >
                        For</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={selectedDepartment}
                            label="Department"
                            onChange={handleDepartmentChange}

                            sx={{
                                '& .MuiInputBase-input': {
                                    color: 'grey', 
                                    width: '100%'
                                },
                                '& .MuiInputLabel-root': {
                                    fontSize: '20px', 
                                    color: 'grey',   
                                },
                                }}
                        >
                            <MenuItem value={10} selected>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </div>
                    <div className='inline-flex items-center gap-2 '>
                        <InputLabel id="subject"
                            sx={{
                                color:'grey',
                                }}
                        >
                        Subject</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={selectedSubject}
                            label="subject"
                            onChange={handleSubjectChange}

                            sx={{
                                '& .MuiInputBase-input': {
                                    color: 'grey',
                                    width: '100%'
                                },
                                '& .MuiInputLabel-root': { 
                                    fontSize: '20px',
                                    color: 'grey',   
                                },
                                }}
                        >
                            <MenuItem value={10} selected>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </div>
                </div>
            </div>
        </div>
    );
}