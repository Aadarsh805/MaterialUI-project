import {Button, styled} from '@mui/material'

function App() {

  const BlueButton = styled(Button)({
    backgroundColor: 'skyblue',
    color: '#888',
    margin: 5,
    "&:hover": {
      backgroundColor: "light-blue",
    },
    "&:disabled": {
      backgroundColor: 'gray',
      color: 'white'
    }
  })
  
  return (
    <div className="App">
      <Button variant='text'>Text</Button>
      <Button variant='contained'>Contained</Button>
      <Button variant='outlined'>Outlined</Button>
      <BlueButton>Hello</BlueButton>
    </div>
  );
}

export default App;
