import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Chip, Rating } from '@mui/material';
import { PlayArrow, Favorite, Share } from '@mui/icons-material';

function MovieCard({
  title,
  description,
  image,
  rating,
  genre,
  year,
  onPlay,
  onFavorite,
  onShare,
}) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 6,
        },
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={"/fallback.jpg" || image}
        alt={`${title} poster`}
      />
      
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        
        <Box 
          sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            mb: 2 
          }}
        >
          <Rating value={rating} precision={0.5} size="small" readOnly />
          <Typography variant="body2" color="text.secondary">
            {year}
          </Typography>
        </Box>
        
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {description}
        </Typography>
        
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {genre && genre.map((genreItem, index) => (
            <Chip
              key={index}
              label={genreItem}
              size="small"
              variant="outlined"
            />
          ))}
        </Box>
      </CardContent>

      <CardActions sx={{ justifyContent: 'space-between' }}>
        <Button
          size="small"
          startIcon={<PlayArrow />}
          onClick={onPlay}
        >
          Watch
        </Button>
        <Box>
          <Button size="small" startIcon={<Favorite />} onClick={onFavorite}>
            Like
          </Button>
          <Button size="small" startIcon={<Share />} onClick={onShare}>
            Share
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
}

export default MovieCard;