import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "../InfoBox.css";

export default function InfoBox({ Info }) {
  const INIT_URL = "https://images.unsplash.com/photo-1720884413532-59289875c3e1?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D";

  return (
    <div className="InfoBox">
      <Card sx={{ maxWidth: 345, margin: "auto", marginTop: "20px" }}>
        <CardMedia
          sx={{ height: 140 }}
          image={INIT_URL}
          title="Weather Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {Info.city}
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
