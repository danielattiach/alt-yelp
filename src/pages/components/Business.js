import { useState, useMemo } from 'react';
import { useBusinessesContext } from 'hooks';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import DefaultRestaurantImage from 'images/default-restaurant.webp';
import {
    BusinessCardMedia,
    BusinessCardContent,
    PriceBox,
    PriceLevelText,
    PriceLevelLabelText,
    AddressAndRatingBox,
    RatingBox,
    MainAddressText,
    SubAddressText,
    BusinessCardActions,
    CategoryText,
    BusinessNameBox,
    FavoriteButtonBox,
} from './styled-components';

const ExpandMore = styled(props => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function Business({ business }) {
    const { favoriteBusinessIDs, setFavoriteBusinessIDs } = useBusinessesContext();
    const [expanded, setExpanded] = useState(false);
    const formattedSubAddress = useMemo(() => {
        const { city, state, postal_code, country } = business.location;
        // create a string of the address and support internationalization
        const subAddress = [city, state, postal_code, country].filter(Boolean).join(', ');
        return subAddress;
    }, [business.location]);
    const ratingClass = useMemo(() => {
        const rating = business.rating;
        if (rating >= 4.5) {
            return 'good-rating';
        }
        if (rating >= 3.5) {
            return 'medium-rating';
        }
        return 'bad-rating';
    }, [business.rating]);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const toggleFavoriteBusiness = () => {
        const { id } = business;
        setFavoriteBusinessIDs(currentFavoriteBusinessIDs => {
            const favoriteBusinessIDs = [...currentFavoriteBusinessIDs];
            if (favoriteBusinessIDs.includes(id)) {
                favoriteBusinessIDs.splice(favoriteBusinessIDs.indexOf(id), 1);
            } else {
                favoriteBusinessIDs.push(id);
            }
            return favoriteBusinessIDs;
        });
    }

    return (
        <Card sx={{ position: 'relative' }}>
            <BusinessNameBox>
                {business.name}
                <FavoriteButtonBox onClick={toggleFavoriteBusiness}>
                    <IconButton>
                        {favoriteBusinessIDs.includes(business.id) ? <StarIcon /> : <StarBorderIcon />}
                    </IconButton>
                </FavoriteButtonBox>
            </BusinessNameBox>
            <BusinessCardMedia
                component="img"
                height="194"
                image={business.photos.length ? business.photos[0] : DefaultRestaurantImage}
            />
            <BusinessCardContent>
                <PriceBox>
                    <PriceLevelText>{business.price}</PriceLevelText>
                    <PriceLevelLabelText>PRICE LEVEL</PriceLevelLabelText>
                </PriceBox>
            </BusinessCardContent>
            <AddressAndRatingBox>
                <Box>
                    <MainAddressText>{business.location.address1}</MainAddressText>
                    <SubAddressText>{formattedSubAddress}</SubAddressText>
                </Box>
                <RatingBox className={ratingClass}>{business.rating}</RatingBox>
            </AddressAndRatingBox>
            <BusinessCardActions disableSpacing>
                <Grid justifyContent="center" container>
                    {business.categories.slice(0, 3).map(category => (
                        <Grid
                            item
                            xs={4}
                            key={`${business.id}-${category.title}`}
                            display="flex"
                            justifyContent="center"
                            alignItems="center
                        ">
                            <CategoryText component="span" variant="body2" color="text.secondary">
                                {category.title}
                            </CategoryText>
                        </Grid>
                    ))}
                </Grid>
                <ExpandMore
                    sx={{ margin: 0 }}
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more">
                    <ExpandMoreIcon />
                </ExpandMore>
            </BusinessCardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <Grid justifyContent="center" container mb={2}>
                    {business.categories.slice(3).map(category => (
                        <Grid
                            item
                            xs={4}
                            key={`${business.id}-${category.title}`}
                            display="flex"
                            justifyContent="center"
                            alignItems="center
                        ">
                            <CategoryText component="span" variant="body2" color="text.secondary">
                                {category.title}
                            </CategoryText>
                        </Grid>
                    ))}
                </Grid>
            </Collapse>
        </Card>
    );
}
