import React, { useEffect, useState } from 'react';
import { Office } from '../api/office-type';
import { fetchOffice } from '../api/office-api';
import { navSlide } from '../asset/animation';
import '../asset/styles.css';
import {
  Card,
  createStyles,
  Grid,
  makeStyles,
  Typography,
  CircularProgress,
  CardMedia,
  CardActionArea,
  CardContent,
  CardActions,
  IconButton,
  Collapse
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import { useSnackbar } from 'notistack';
import Slider from '@material-ui/core/Slider';

export const mainGridHeight = '32.5vh';
const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      paddingTop: '1em'
    },
    item: {
      height: mainGridHeight
    },
    card: {
      maxWidth: 300
    },
    title: {
      fontSize: 14,
      marginBottom: 0
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest
      })
    },
    expandOpen: {
      transform: 'rotate(180deg)'
    },

    slider: {
      width: 200
    }
  })
);
const seatMarks = [
  {
    value: 1,
    label: '1 seat'
  },

  {
    value: 10,
    label: '10 seats'
  }
];

const sqmMarks = [
  {
    value: 50,
    label: '50 sqm'
  },

  {
    value: 400,
    label: '400 sqm'
  }
];

const priceMarks = [
  {
    value: 600,
    label: '$600'
  },

  {
    value: 2000,
    label: '$2000'
  }
];

export function Main(): JSX.Element {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [isLoading, setIsLoading] = useState(false);
  const [expanded, setExpanded] = React.useState(false);
  const initialValue: Office[] = [];
  const [offices, setOffices] = useState<Office[]>(initialValue);
  const initialValueCache: Office[] = [];
  const [officesCache, setOfficesCache] = useState<Office[]>(initialValueCache);

  const [searchValue, setSearchValue] = useState('');
  const [price, setPrice] = React.useState([600, 2000]);
  const [seat, setSeat] = React.useState(10);
  const [sqm, setSqm] = React.useState([50, 400]);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const updateSearch = (e: any) => {
    e.preventDefault();
    setSearchValue(e.target.value);
  };
  const handleSeach = () => {
    const myOffices = officesCache.filter(office =>
      office.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    if (myOffices.length == 0) {
      const variant = 'error';
      enqueueSnackbar('No Data Found!', {
        variant,
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'right'
        }
      });
    }
    setOffices(myOffices);
  };
  const handleResult = () => {
    const myOffices = officesCache.filter(
      office =>
        office.price_per_month >= price[0] &&
        office.price_per_month <= price[1] &&
        office.sqm >= sqm[0] &&
        office.sqm <= sqm[1] &&
        office.seats <= seat
    );
    if (myOffices.length == 0) {
      const variant = 'error';
      enqueueSnackbar('No Data Found!', {
        variant,
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'right'
        }
      });
    }
    setOffices(myOffices);
  };
  const handleSeatChange = (event: any, newValue: any) => {
    setSeat(newValue);
  };
  const handleSqmChange = (event: any, newValue: any) => {
    setSqm(newValue);
  };
  const handlePriceChange = (event: any, newValue: any) => {
    setPrice(newValue);
  };

  useEffect(() => {
    navSlide();
    const fetch = () => {
      setIsLoading(true);
      try {
        const data = fetchOffice();
        setOfficesCache(data);
        if (data) {
          setTimeout(() => {
            setOffices(data);
            setIsLoading(false);
            const variant = 'success';
            enqueueSnackbar('Welcome to Property Listing!', {
              variant,
              anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'right'
              }
            });
          }, 1000);
        }
      } catch (e) {
        console.log('error fetchOffice:', e);
      }
    };
    fetch();
  }, []);

  return (
    <div>
      <header>
        <nav className='main-header'>
          <div className='logo'>
            <a href='/'>
              <h4>Property Listing</h4>
            </a>
          </div>
          <form>
            <input
              type='search'
              placeholder='Title'
              onChange={updateSearch}
              className='header-search'
            />
            <button
              className='header-search-btn'
              type='button'
              onClick={handleSeach}
            >
              Search
            </button>
          </form>

          <div className='burger'>
            <div className='line1'></div>
            <div className='line2'></div>
            <div className='line3'></div>
          </div>
        </nav>
      </header>

      <div className='main-content'>
        <nav className='side-nav'>
          <ul className='nav-links'>
            <li>
              <h5>Price Per Month:</h5>
              <div className={classes.slider}>
                <Slider
                  value={price}
                  aria-labelledby='range-slider'
                  step={100}
                  min={600}
                  max={2000}
                  marks={priceMarks}
                  valueLabelDisplay='on'
                  onChange={handlePriceChange}
                />
              </div>
            </li>
            <li>
              <h5>Maximum Seats:</h5>
              <div className={classes.slider}>
                <Slider
                  value={seat}
                  aria-labelledby='discrete-slider-custom'
                  step={1}
                  min={1}
                  max={10}
                  marks={seatMarks}
                  valueLabelDisplay='auto'
                  onChange={handleSeatChange}
                />
              </div>
            </li>
            <li>
              <h5>Size Range: </h5>
              <div className={classes.slider}>
                <Slider
                  value={sqm}
                  aria-labelledby='range-slider'
                  step={10}
                  min={50}
                  max={400}
                  marks={sqmMarks}
                  valueLabelDisplay='on'
                  onChange={handleSqmChange}
                />
              </div>
            </li>
          </ul>

          <form className='side-nav-search'>
            <input className='side-search-bar' type='search' placeholder='Title' onChange={updateSearch} />
            <button className='side-search-btn' type='button' onClick={handleSeach}>
              Search
            </button>
          </form>

          <div className='submit'>
            <button type='button' onClick={handleResult}>
              Submit Results
            </button>
          </div>
        </nav>

        <div className='cards-section'>
          {isLoading ? (
            <div className='progress'>
              <CircularProgress />
            </div>
          ) : (
              <Grid
                className={classes.root}
                container={true}
                spacing={2}
                justify='flex-start'
                alignItems='center'
              >
                {offices.map(office => (
                  <Grid item={true} xs={12} sm={6} md={3}>
                    <Card className={classes.card}>
                      <CardActionArea href='#'>
                        <CardMedia
                          component='img'
                          height='140'
                          image={office.profile_image}

                        />
                        <CardContent>
                          <Typography gutterBottom variant='subtitle1'>
                            {office.title}
                          </Typography>
                          <Typography
                            variant='body2'
                            color='textSecondary'
                            component='p'
                          >
                            {office.created_at.toLocaleString()}
                          </Typography>
                          <Typography
                            variant='body2'
                            color='textSecondary'
                            component='p'
                          >
                            ${office.price_per_month}
                          </Typography>
                          <Typography
                            variant='body2'
                            color='textSecondary'
                            component='p'
                          >
                            {office.seats} seats
                        </Typography>
                          <Typography
                            variant='body2'
                            color='textSecondary'
                            component='p'
                          >
                            {office.sqm} sqm
                        </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                          <IconButton aria-label='add to favorites'>
                            <FavoriteIcon />
                          </IconButton>
                          <IconButton
                            className={clsx(classes.expand, {
                              [classes.expandOpen]: expanded
                            })}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label='show more'
                          >
                            <ExpandMoreIcon />
                          </IconButton>
                        </CardActions>

                        <Collapse in={expanded} timeout='auto' unmountOnExit>
                          <CardContent>
                            <Typography
                              variant='body2'
                              color='textSecondary'
                              component='p'
                            >
                              {office.description}
                            </Typography>
                          </CardContent>
                        </Collapse>
                      </CardActionArea>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            )}
        </div>
      </div>
    </div>
  );
}
