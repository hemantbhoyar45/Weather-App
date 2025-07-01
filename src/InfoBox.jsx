import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import UmbrellaIcon from '@mui/icons-material/Umbrella';
import SevereColdIcon from '@mui/icons-material/SevereCold';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({ Info }) {
  const INIT_URL = "https://images.unsplash.com/photo-1720884413532-59289875c3e1?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D";

   let HOT_URL = "https://static1.straitstimes.com.sg/s3fs-public/articles/2024/04/11/hot%20weather%20singapore%20feature%203.jpg?VersionId=dTXMuVoZCVGPxDkukDqQpHEXxdQW0xZs"

   let RAINY_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDDKwZ9XweQ2s4YJcemD-uhcX9h733YLZoxw&s"

   let COLD_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeb0ShipoNCY3ZKT2EanOQ9ns8SfxKKj9VGg&s"
  return (
    <div className="InfoBox">
      <Card sx={{ maxWidth: 345, margin: "auto", marginTop: "20px" }}>
        <CardMedia
          sx={{ height: 140 }}
          image={
          Info.humidity > 80 
          ? RAINY_URL
          : Info.temp > 15 
          ? HOT_URL
          : COLD_URL
        }
          title="Weather Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {Info.city}{
            Info.humidity > 80 
          ? < UmbrellaIcon />
          : Info.temp > 15 
          ? <SunnyIcon />
          : < SevereColdIcon />
        }
          </Typography>
          <Typography variant="body2" color="text.secondary" component={"span"}>
            <p>Temperature = {Info.temp}&deg;C</p>
            <p>Humidity = {Info.humidity}%</p>
            <p>Min Temp = {Info.tempMin}&deg;C</p>
            <p>Max Temp = {Info.tempMax}&deg;C</p>
            <p>
              Weather can be described as <i>{Info.weather}</i> and feels like {Info.feelsLike}&deg;C
            </p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
