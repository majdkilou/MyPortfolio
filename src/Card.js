import * as React from 'react';

import Card from '@mui/material/Card';
import Hello from './undraw_Hello_re_3evm.png';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { experimentalStyled as styled } from '@mui/material/styles';

const CustomizedIcon = styled(ExpandMoreIcon)`
  color: #510169;

  :hover {
    color: #2c9185;
  }
  
  animation: blinker 1s linear infinite;

@keyframes blinker {
  50% {
    opacity: 0;
  }
`;

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 700 }}>
      <CardMedia
        component="img"
        min-height="100vh"
        image={Hello}
        alt="MajdKilou"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          I have a Higher National Diploma in Computing and Business
          Applications, a junior BS Computer science student, Building a high
          quality website with, HTML, CSS, JavaScript and React is my passion .
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <CustomizedIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Why I can help you?</Typography>

          <Typography paragraph>
            A problem solver who enjoys a challenge and can work well under
            pressure and who possesses strong customer service skills, good
            communication skills and attention to detail.
          </Typography>

          <Typography>Thanks</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
