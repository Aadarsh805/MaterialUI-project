import {
  Avatar,
  AvatarGroup,
  Box,
  ImageList,
  ImageListItem,
  Typography,
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
} from "@mui/material";

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block"} }}>
      <Box position="fixed" width={300} mt={3}>
        <Typography variant="h6" fontWeight={200}>
          Online Friends
        </Typography>
        <AvatarGroup max={5}>
          <Avatar src="https://randomuser.me/portraits/men/21.jpg" />
          <Avatar src="https://randomuser.me/portraits/women/19.jpg" />
          <Avatar src="https://randomuser.me/portraits/men/19.jpg" />
          <Avatar src="https://randomuser.me/portraits/men/11.jpg" />
          <Avatar src="https://randomuser.me/portraits/women/13.jpg" />
          <Avatar src="https://randomuser.me/portraits/men/31.jpg" />
          <Avatar src="https://randomuser.me/portraits/women/21.jpg" />
          <Avatar src="https://randomuser.me/portraits/men/53.jpg" />
          <Avatar src="https://randomuser.me/portraits/wommen/53.jpg" />
          <Avatar src="https://randomuser.me/portraits/men/48.jpg" />
          <Avatar src="https://randomuser.me/portraits/women/48.jpg" />
        </AvatarGroup>
        <Typography variant="h6" fontWeight="200" mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          {photos.map((photo) => (
            <ImageListItem key={photo.title}>
              <img src={photo.img} alt={photo.title} loading="lazy" />
            </ImageListItem>
          ))}
        </ImageList>
        <Typography variant="h6" fontWeight="200" mt={2}>
          Latest Conversations
        </Typography>

        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://randomuser.me/portraits/women/61.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://randomuser.me/portraits/men/31.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </>
          }
        />
      </ListItem>
    </List>
      </Box>
    </Box>
  );
};

export default Rightbar;

const photos = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
  },
];
